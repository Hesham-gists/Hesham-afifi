import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() isDarkMode = false;
  @Output() change_mode = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
}
