import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  titular: string = '';
  tarjetaEncontrada: any = null;

  constructor(private http: HttpClient) { }

  buscarTarjeta() {
    console.log("hola")
    this.http.get<any>('https://app.gosummus.com/testing/api/tarjeta/' + this.titular)
      .subscribe(data => {
        this.tarjetaEncontrada = data;
      });
  }
}
