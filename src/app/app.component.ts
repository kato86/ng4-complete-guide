import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCRZRXAMvc6SHl_OFaUwF-P533W73MPoPo',
      authDomain: 'ng-recipe-book-ea90d.firebaseapp.com'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
