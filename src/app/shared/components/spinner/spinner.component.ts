import { Component, Input, OnInit } from "@angular/core";
import { ThemePalette } from "@angular/material/core";
import { ProgressSpinnerMode } from "@angular/material/progress-spinner";

@Component({
  selector: "app-spinner",
  templateUrl: "./spinner.component.html",
  styleUrls: ["./spinner.component.scss"],
})
export class SpinnerComponent implements OnInit {
  @Input()
  color: ThemePalette = "primary";
  @Input()
  diameter: number = 80;
  @Input()
  mode: ProgressSpinnerMode = "indeterminate";
  @Input()
  strokeWidth: number = 10;
  @Input()
  value: number = 50;

  constructor() {}

  ngOnInit() {}
}
