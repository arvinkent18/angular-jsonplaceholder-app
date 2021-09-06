import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Photo } from '../photo.model';
import { PhotosService } from './../photos.service';
import * as PhotoActions from './photo.actions';

@Injectable()
export class PhotoEffects {
  constructor(
    private action$: Actions,
    private photosService: PhotosService,
  ) {}

  loadPhotos$ = createEffect(
    () => {
      return this.action$.pipe(
        ofType(PhotoActions.loadPhotos),
        mergeMap((action) => {
          return this.photosService.getPhotos().pipe(
            map((photos: Photo[]) => {
              return PhotoActions.loadPhotosSuccess({ photos });
            }),
            catchError(() => of(PhotoActions.loadPhotosError)),
          )
        })
      )
    }
  )
}