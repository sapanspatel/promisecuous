import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, ViewState} from '../store/state';
import { AppActions } from '../store/actions/appActions';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  subroute: string;
  posts: FirebaseListObservable<any[]>; 
  uid: string;

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.store.select((state: AppState) => {
      return state;
    }).subscribe((state: AppState) => {
      this.subroute = state.view.subroute;
      this.posts = state.view.timelinePosts;
      this.uid = state.user.userData.uid;
    });

    this.store.dispatch({type: AppActions.GET_TIMELINE_POSTS, payload: this.uid});
  }

  changeCategory(category: string): void {
    this.store.dispatch({type: AppActions.SET_SUB_ROUTE, payload: category});
  }
}