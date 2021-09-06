import { Photo } from "../photo.model";

export interface PhotoState {
  photos: Photo[];
}

export const initialState: PhotoState = {
  photos: [],
}