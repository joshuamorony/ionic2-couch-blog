import { Injectable, NgZone } from '@angular/core';
import { Data } from './data';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class Posts {

	postSubject: any = new Subject();	

	constructor(public dataService: Data, public zone: NgZone) {

		this.dataService.db.changes({live: true, since: 'now', include_docs: true}).on('change', (change) => {
			if(change.doc.type === 'post'){
				this.emitPosts();
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

				this.postSubject.next(posts);

			});

		});

	}

}
