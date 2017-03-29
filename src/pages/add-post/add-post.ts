import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Posts } from '../../providers/posts';

@Component({
  selector: 'page-add-post',
  templateUrl: 'add-post.html'
})
export class AddPostPage {

	post: any = {
		_id: null,
		author: 'Josh Morony',
		content: '',
		datePublished: '',
		dateUpdated: '',
		title: '',
		type: 'post'
	};

	constructor(public navCtrl: NavController, public navParams: NavParams, public postService: Posts) {}

	ionViewDidLoad() {

	}
	
	save(){
	
		// Generate computed fields
		this.post._id = this.post.title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'');
		this.post.datePublished = new Date().toISOString();
		this.post.dateUpdated = new Date().toISOString();

		this.postService.addPost(this.post);
	
		this.navCtrl.pop();

	}

}
