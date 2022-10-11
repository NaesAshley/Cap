import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicare',
  templateUrl: './medicare.component.html',
  styleUrls: ['./medicare.component.css'],
})
export class MedicareComponent implements OnInit {
  constructor() {}

  slides: any[] = new Array(3).fill({
    id: -1,
    src: '',
    title: '',
    subtitle: '',
  });

  ngOnInit(): void {
    this.slides[0] = {
      src: '/assets/SlideShow/Medicare 101/1.png',
    };
    this.slides[1] = {
      src: '/assets/SlideShow/Medicare 101/2.png',
    };
    this.slides[2] = {
      src: '/assets/SlideShow/Medicare 101/3.png',
    };
  }
}
