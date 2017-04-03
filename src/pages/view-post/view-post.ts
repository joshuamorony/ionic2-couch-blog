import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddCommentPage } from '../add-comment/add-comment';
import { Comments } from '../../providers/comments';

@Component({
  selector: 'page-view-post',
  templateUrl: 'view-post.html'
})
export class ViewPostPage {

	post: any;
	comments: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public commentService: Comments) {}

	ionViewDidLoad() {

		this.post = this.navParams.get('post');

		this.commentService.getComments(this.post._id).subscribe((comments) => {
			this.comments = comments;
		});
	}

	pushAddCommentPage(){

		this.navCtrl.push(AddCommentPage, {
			post: this.post
		});

	}

}
