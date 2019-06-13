import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../../home-model";

import * as PostActions from "../../actions/home.actions";
import { select, Store } from "@ngrx/store";
import * as reducer from "../../reducers/home.reducer";

@Component({
  selector: "app-home",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  posts$: Observable<Post[]>;
  loading$: Observable<Boolean>;
  error$: Observable<string>;

  constructor(private store: Store<any>) {
    this.store.dispatch(new PostActions.GetPost(''));
    this.posts$ = this.store.select( reducer.selectPosts);
    this.error$ = this.store.select( reducer.selectError);
    this.loading$ = this.store.select(state => state.HomeStore.loading);
  }
  ngOnInit() {}
}
