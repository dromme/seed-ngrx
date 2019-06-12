import { createAction, Action } from '@ngrx/store';
import { Post } from '../home-model';

export const GET_POST           = 'Post get';
export const GET_POST_SUCCESS   = 'Post get success';
export const GET_POST_FAIL   = 'Post get fail';



export class GetPost implements Action {
  readonly type = GET_POST;
  constructor(public payload: string) {}
}

export class GetPostSuccess implements Action {
  readonly type = GET_POST_SUCCESS;
  constructor(public payload: Post[]) {}
}

export class GetPostFail implements Action {
  readonly type = GET_POST_FAIL;
  constructor(public payload: string) {}
}

export type All
  = GetPost |
    GetPostSuccess |
    GetPostFail;

export const loadPosts = createAction('[Home] Load Posts');

