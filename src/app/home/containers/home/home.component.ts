import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../../home-model';

import * as PostActions from "../../actions/home.actions";
import { select, Store } from '@ngrx/store';
import * as fromHome from '../../reducers/home.reducer';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private store: Store<fromHome.State>) {
    // this.posts$ = store.pipe(fromHome.postReducer(fromHome.State, PostActions.));
    this.store.dispatch(new PostActions.GetPost('Tutorial Angular en Español'));
  }
  ngOnInit() {
  }

}
