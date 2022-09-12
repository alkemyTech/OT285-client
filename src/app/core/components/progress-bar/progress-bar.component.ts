import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressComponent implements OnInit {
  @Input()
  color: ThemePalette = "primary";
  @Input()
  mode: ProgressBarMode = "determinate";
  @Input()
  value: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
