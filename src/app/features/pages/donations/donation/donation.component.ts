import { CurrencyPipe } from "@angular/common";
import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-donation",
  templateUrl: "./donation.component.html",
  styleUrls: ["./donation.component.scss"],
})
export class DonationComponent implements OnInit, OnDestroy {
  @Input() text = "¡Contribuye!";
  cant = new FormControl();
  noDigit = new RegExp(/\D/g);
  firstZeros = new RegExp(/^0+/);

  cantValueChange = new Subscription();

  constructor(private router: Router, private currencyPipe: CurrencyPipe) {}

  ngOnInit(): void {
    this.cantValueChange = this.cant.valueChanges.subscribe((val) => {
      const value = val.replace(this.noDigit, "").replace(this.firstZeros, "");
      this.cant.setValue(
        this.currencyPipe.transform(value, "USD", "symbol", "1.0-0"),
        { emitEvent: false }
      );
    });
  }

  send(): void {
    console.log(this.cant.value);
    if (this.cant.value) {
      this.router.navigate(["gracias"]);
    }
  }

  ngOnDestroy(): void {
    this.cantValueChange.unsubscribe();
  }
}
