import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
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
