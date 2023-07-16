import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hesham-afifi';
  isDarkMode = false;

  constructor(private mediaMatcher: MediaMatcher) {
    const mediaQueryList = this.mediaMatcher.matchMedia(
      '(prefers-color-scheme: dark)'
    );

    this.isDarkMode = mediaQueryList.matches;
  }

  ngOnInit(): void {}
}
