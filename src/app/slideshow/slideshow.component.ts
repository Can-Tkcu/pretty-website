import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  images = ['berlin.jpg', 'code.jpg', 'macbook.jpg'];
  headlines = ['Based in Berlin', 'Help build the future!', 'Continuous Improvement']

  currentImage = 0;
  showImage = true;
  
  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentImage++;
      this.currentImage = this.currentImage % this.images.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 10)
    }, 8000)
  }

}