import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Photo } from './photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http: HttpClient) { }

  getPhotos() {
    return this.http
      .get(environment.jsonPlaceholderAPI + 'photos')
      .pipe(map((data) => {
        const photos: Photo[] = [];
        
      }))
  }
}
