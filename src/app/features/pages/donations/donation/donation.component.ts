import { Component, Input, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "app-donation",
  templateUrl: "./donation.component.html",
  styleUrls: ["./donation.component.scss"],
})
export class DonationComponent implements OnInit {
  @Input() text = "¡Contribuye!";
  value = 0
  values = [500, 1000, 1500, 2000, 2500, 3000];

  constructor() {}

  ngOnInit(): void {
  }

  send(): void {
    switch (this.value) {
      case 500:
        window.open('https://mpago.la/2JmwW1H', '_blank');
        break;
      case 1000:
        window.open('https://mpago.la/1KR4M9L', '_blank');
        break;
      case 1500:
        window.open('https://mpago.la/2VzYK6j', '_blank');
        break;
      case 2000:
        window.open('https://mpago.la/1ALxtHB', '_blank');
        break;  
      case 2500:
        window.open('https://mpago.la/33gognJ', '_blank');
        break;
      case 3000:
        window.open('https://mpago.la/2yuJ8a2', '_blank');
        break;
      default:
        break;
    }
  }
}
