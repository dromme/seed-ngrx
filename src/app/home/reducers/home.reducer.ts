import { createReducer, on, createSelector, Action } from "@ngrx/store";
import * as PostActions from "../actions/home.actions";
import { Post } from "../home-model";

export type Action = PostActions.All;

export interface State {
  error: string;
  loading: boolean;
  posts: Post[];
}

const initialState: State = {
  error: '',
  loading: false,
  posts: []
};

export function postReducer(state: State = initialState, action: PostActions.All): State {
  switch (action.type) {
    case PostActions.GET_POST:
      return { ...state, loading: true };
    case PostActions.GET_POST_FAIL:
      return { ...state, loading: false, error: action.payload };
    case PostActions.GET_POST_SUCCESS:
      return { ...state, posts: action.payload, loading: false};
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
export const getHomeState = (state) : State => state.HomeStore;
export const selectPosts = createSelector( getHomeState, (state) => state.posts );
export const selectError = createSelector( getHomeState, (state) => state.error );


// export const getLoadedState = (state: State) => state.loaded;
// export const getPostsState = (state: State) => state.posts;
