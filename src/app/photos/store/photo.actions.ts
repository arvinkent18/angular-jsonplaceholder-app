import { createAction, props } from "@ngrx/store";
import { Photo } from './../photo.model';

export const loadPhotos = createAction('[Photos Page] Load Photos');
export const loadPhotosSuccess = createAction(
  '[Photos Page] Load Photos Success',
  props<{ photos: Photo[] }>(),
);
export const loadPhotosError = createAction('[Photos Page] Load Photos Error');