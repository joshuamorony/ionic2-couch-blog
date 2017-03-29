import { Component } from '@angular/core';
import { Posts } from '../../providers/posts';
import { NavController } from 'ionic-angular';
import { ViewPostPage } from '../view-post/view-post';
import { AddPostPage } from '../add-post/add-post';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	posts: any;

	constructor(public navCtrl: NavController, public postsService: Posts) {

	}

	ionViewDidLoad(){

		this.postsService.getPosts().subscribe((posts) => {
			this.posts = posts;
		});

	}

	viewPost(post){
		this.navCtrl.push(ViewPostPage, {
			post: post
		});
	}

	pushAddPostPage(){
		this.navCtrl.push(AddPostPage);
	}

}