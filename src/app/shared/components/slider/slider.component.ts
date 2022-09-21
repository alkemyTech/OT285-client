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
        image: "https://changomovil.net/wp-content/uploads/2021/09/Jorge-Mier-Desarrollo-Sostenible.jpg",
        title: "Desarrollo Sustentable",
        description: "Satisface las necesidades del presente sin comprometer la capacidad de las generaciones futuras para satisfacer sus propias necesidades",
      },
      {
        image: "https://img.freepik.com/fotos-premium/deforestacion-area-tala-arboles-tablas-madera_263357-491.jpg?w=2000",
        title: "Deforestación",
        description: "Su principal causa es la agricultura insostenible e ilegal",
      },
      {
        image: "https://wgsustentable.com/wp-content/uploads/2021/03/AdobeStock_309195144-post-dia-mundial-naturaleza.jpeg",
        title: "Naturaleza",
        description: "Formada por TODOS los organismos vivos, sustancias materiales y minerales",
      },
      {
        image: "https://www.bbva.com/wp-content/uploads/2018/09/cambio-climatico-efecto-bbva.jpg",
        title: "Cambios Climáticos",
        description: "El principal motor del cambio climático es el efecto invernadero",
      },
      {
        image: "https://www.endolla.barcelona/sites/default/files/styles/news_thumbnail/public/2021-09/MicrosoftTeams-image%20%2846%29.png?itok=hlKq64Ca",
        title: "Medio Ambiente",
        description: "Nuestro deber de cuidarlo se basa principalmente en que el bienestar humano depende de las buenas condiciones de nuestro mundo y su sistema",
      },
      {
        image: "https://www.hazteveg.com/img/pages/full/202002/H21-82511.jpg",
        title: "Sobreexplotación",
        description: "El mayor impacto es la extinción del recurso",
      },
    ];
  }
}
