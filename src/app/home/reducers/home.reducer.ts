import { createReducer, on, createSelector, Action } from "@ngrx/store";
import * as PostActions from "../actions/home.actions";
import { Post } from "../home-model";

export type Action = PostActions.All;

export interface State {
  loaded: boolean;
  loading: boolean;
  posts: Post[];
}
const initialState: State = {
  loaded: false,
  loading: false,
  posts: []
};

export function postReducer(state: State, action: PostActions.All) {
  switch (action.type) {
    case PostActions.GET_POST:
      return { ...state, loading: true };
    case PostActions.GET_POST_FAIL:
      return { ...state, loading: false };
    case PostActions.GET_POST_SUCCESS:
      return { ...state, posts: action.payload, loading: false, loaded: true };
    default:
      return state;
  }
}

// export const homeReducer = createReducer(
//   initialState,
//   on(getData, state => ({
//     ...state,
//     loading: true
//   }))
// );

// export function reducer(state: State | undefined, action: Action) {
//   return homeReducer(state, action);
// }
// export const getLoadingState = (state: State) => state.loading;
// export const getLoadedState = (state: State) => state.loaded;
// export const getPostsState = (state: State) => state.posts;
