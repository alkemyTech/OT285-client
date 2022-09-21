import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-donation",
  templateUrl: "./donation.component.html",
  styleUrls: ["./donation.component.scss"],
})
export class DonationComponent {
  @Input() text = "¡Contribuye!";
  value = 0;
  values = [
    {amount: 500, url: 'https://mpago.la/2JmwW1H'},
    {amount: 1000, url: 'https://mpago.la/1KR4M9L'},
    {amount: 1500, url: 'https://mpago.la/2VzYK6j'},
    {amount: 2000, url: 'https://mpago.la/1ALxtHB'},
    {amount: 2500, url: 'https://mpago.la/33gognJ'},
    {amount: 3000, url: 'https://mpago.la/2yuJ8a2'},
  ];

  constructor() {}

  send(url: string | null): void {
    if(url){
      window.open(url, '_blank');
    }
  }

  urlOfValue(amount: number): string | null{
    const url = this.values.find((e)=> e.amount == amount)?.url;
    if(url){
      return url;
    }
    return null
  }
}
