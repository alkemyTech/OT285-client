import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-progress-loader',
  templateUrl: './progress-loader.component.html',
  styleUrls: ['./progress-loader.component.scss']
})
export class ProgressLoaderComponent implements OnInit {
  @Input()
  color: ThemePalette = "primary";
  @Input()
  mode: ProgressBarMode = "indeterminate";
  @Input()
  value: number = 0;

  constructor(public loaderService: LoaderService) { }

  ngOnInit(): void {
  }

}
