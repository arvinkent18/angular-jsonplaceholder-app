import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PhotoState } from './photo.state';

export const PHOTO_STATE_NAME = 'photos';

const getPhotosState = createFeatureSelector<PhotoState>(PHOTO_STATE_NAME);

export const getPhotos = createSelector(getPhotosState, (state: PhotoState) => state.photos);