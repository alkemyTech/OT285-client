import { Component, Input, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "app-donation",
  templateUrl: "./donation.component.html",
  styleUrls: ["./donation.component.scss"],
})
export class DonationComponent implements OnInit {
  @Input() text = "¡Contribuye!";

  constructor() {}

  ngOnInit(): void {
  }

  send(): void {
    window.open('https://link.mercadopago.com.ar/alkemy285', '_blank')
  }
}
