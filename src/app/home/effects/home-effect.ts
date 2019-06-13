import { Injectable } from '@angular/core';

import { ofType, Actions, createEffect } from '@ngrx/effects';
import * as postActions from '../actions/home.actions';
import { Post } from '../home-model';
import { map, catchError, switchMap, delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { FakeApiService } from '../services/fake-api.service';


@Injectable()
export class HomeEffects {

  loadCollection$ = createEffect(() =>
  this.actions$.pipe(
    ofType(postActions.GET_POST),
    switchMap(() =>
      this.service.getPosts().pipe(
        delay(3000),
        map((posts: Post[]) => {
          return new postActions.GetPostSuccess(posts)}
        ),
        catchError(error =>
          of( new postActions.GetPostFail('ERROR'))
        )
      )
    )
  )
);

  constructor(
    private actions$: Actions,
    private service: FakeApiService
  ) {}


}
