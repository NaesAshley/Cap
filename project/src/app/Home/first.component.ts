import { Component, OnInit } from '@angular/core';
import {} from 'module';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = 'project1';
  myImage: string = 'assets/pictures/9.png';
}
