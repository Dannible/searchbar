import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'searchbar',
  templateUrl: 'searchbar.html',
})
export class Searchbar {
  Input() searchtitle:string = "Search";
  Input() showtitle:boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Searchbar');
  }
}
