import { PhotosService } from './photos.service';
import { Component, OnInit } from '@angular/core';
import { Photo } from './photo.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photos: Photo[] = [];

  constructor(private photosService: PhotosService) { }
  
  ngOnInit(): void {
    this.photosService.getPhotos().subscribe(photos => {
      this.photos = photos;
    });
  }

}
