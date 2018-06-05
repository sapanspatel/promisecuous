import { FirebaseListObservable } from 'angularfire2/database';

export interface UserState {
  loggedIn: boolean;
  loginFail: boolean;
  userData: any;
}

export const INITIAL_USER_STATE: UserState = {
  loggedIn: false,
  loginFail: false,
  userData: {
    uid: ''
  }
};

export interface ViewState {
  timelinePosts: FirebaseListObservable<any[]>;
}

export const INITIAL_VIEW_STATE: ViewState = {
  timelinePosts: null
};

export interface AppState {
  user: UserState;
  view: ViewState;
}

export const INITIAL_APP_STATE: AppState = {
   user: INITIAL_USER_STATE,
   view: INITIAL_VIEW_STATE
};
