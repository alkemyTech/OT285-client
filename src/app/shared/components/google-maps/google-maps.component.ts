import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit {

  title: string = 'google-maps';
  private map!: google.maps.Map;

  constructor() { }

  ngOnInit(): void {

    let loader = new Loader({
      apiKey: '###yourapikey###',
    });

    loader.load().then(() => {
      console.log('loaded gmaps')

      const location = { lat: 51.233334, lng: 6.783333 }

      let element = document.getElementById("map");
      if (element){
        this.map = new google.maps.Map(element, {
          center: location,
          zoom: 6,
        })
      }        

      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
      });
    })
  }

}
