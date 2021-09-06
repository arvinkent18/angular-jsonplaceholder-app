import { Action, createReducer, on } from "@ngrx/store";
import { loadPhotosSuccess } from './photo.actions';
import { initialState, PhotoState } from './photo.state';

const _photoReducer = createReducer(
  initialState,
  on(loadPhotosSuccess, (state, action) => {
    return {
      ...state,
      photos: action.photos,
    };
  }),
);

export function photoReducer(state: PhotoState | undefined, action: Action) {
  return _photoReducer(state, action);
}