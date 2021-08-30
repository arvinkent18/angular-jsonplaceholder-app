import { PhotosService } from './photos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  constructor(private photosService: PhotosService) { }
  
  ngOnInit(): void {
    
  }

}
