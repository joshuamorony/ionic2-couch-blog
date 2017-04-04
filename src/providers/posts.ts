import { Injectable, NgZone } from '@angular/core';
import { Data } from './data';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class Posts {

	posts: any;
	postSubject: any = new Subject();	

	constructor(public dataService: Data, public zone: NgZone) {

		this.dataService.db.changes({live: true, since: 'now', include_docs: true}).on('change', (change) => {
			if(change.doc.type === 'post'){
				this.changePost(change);
			}
		});

	}

	getPosts(){

		this.emitPosts();

		return this.postSubject;

	}

	addPost(post): void {
		this.dataService.db.put(post);
	}

	emitPosts(): void {
	
		this.zone.run(() => {

			this.dataService.db.query('posts/by_date_published').then((data) => {

				let posts = data.rows.map(row => {
					return row.value;
				});

				this.posts = posts;
				this.postSubject.next(this.posts);

			});

		});

	}

	changePost(change): void {

		let changedDoc = null;
		let changedIndex = null;

		// Find the affected document (if any)
		this.posts.forEach((doc, index) => {

			if(doc._id === change.id){
				changedDoc = doc;
				changedIndex = index;
			}

		});

		//A document was deleted - remove it
		if(change.deleted){
			this.posts.splice(changedIndex, 1);
		} else {

			//A document was updated - change it
			if(changedDoc){
				this.posts[changedIndex] = change.doc;
			} 

			//A document was added - add it
			else {
				this.posts.push(change.doc); 
			}

		}

		this.postSubject.next(this.posts);

	}

}
