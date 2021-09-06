import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Photo } from './photo.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {
  
  constructor(private http: HttpClient) { }

  getPhotos(): Observable<Photo[]> {
    return this.http
      .get<Photo[]>(environment.jsonPlaceholderAPI + 'photos')
      .pipe(
        map((responseData) => {
          const photos: Photo[] = [];

          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              photos.push({ ...responseData[key], id: Number(key) });
            }
          }
                                          
          return photos;
        }),
      );
  }
}
