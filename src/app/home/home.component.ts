import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  slideImage_1: string = 'assets/slider_images/1.jpeg';
  slideImage_2: string = 'assets/slider_images/2.jpg';
  slideImage_3: string = 'assets/slider_images/3.jpg';
  constructor() {}

  ngOnInit(): void {}
}
