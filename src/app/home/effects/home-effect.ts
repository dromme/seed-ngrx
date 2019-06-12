import { Injectable } from '@angular/core';

import { ofType, Actions, Effect, createEffect } from '@ngrx/effects';
import { JsonPlaceholderService } from 'src/app/services/json-placeholder.service';
import * as postActions from '../actions/home.actions';
import { Post } from '../home-model';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';

@Injectable()
export class HomeEffects {

  loadCollection$ = createEffect(() =>
  this.actions$.pipe(
    ofType(postActions.GET_POST),
    switchMap(() =>
      this.jsonPlaceholderService.getPosts().pipe(
        map((books: Post[]) =>
          new postActions.GetPostSuccess(books)
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
    private jsonPlaceholderService: JsonPlaceholderService
  ) {}


}
