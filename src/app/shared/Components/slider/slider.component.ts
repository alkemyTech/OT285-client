import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slider",
  templateUrl: "./slider.component.html",
  styleUrls: ["./slider.component.scss"],
})
export class SliderComponent implements OnInit {
  carouselList!: any;

  constructor(/* private http: HttpService */) {}

  ngOnInit() {
    /* this.http.getCarouselList().subscribe((data)=> {
      this.carouselList = data
    })*/
    // To Delete
    this.carouselList = [
      {
        image: "https://placeimg.com/1080/500/animals",
        title: "Animales",
        description: "Fotos de Animales",
      },
      {
        image: "https://placeimg.com/1080/500/arch",
        title: "Arquitectura",
        description: "Fotos de Arquitectura",
      },
      {
        image: "https://placeimg.com/1080/500/nature",
        title: "Naturaleza",
        description: "Fotos de la Naturaleza",
      },
    ];
  }
}
