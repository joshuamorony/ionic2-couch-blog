import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-view-post',
  templateUrl: 'view-post.html'
})
export class ViewPostPage {

	post: any;

	constructor(public navCtrl: NavController, public navParams: NavParams) {}

	ionViewDidLoad() {

		this.post = this.navParams.get('post');

	}

}
