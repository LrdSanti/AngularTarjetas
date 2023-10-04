import { Component } from '@angular/core';
import { TarjetaService } from './tarjeta.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  tarjeta: any = {
    titular: '',
    numero: '',
    fecha: '',
    cvv: ''
  };

  constructor(private http: HttpClient) { }

  guardarTarjeta() {
    this.http.post('https://app.gosummus.com/testing/api/tarjeta', this.tarjeta)
      .subscribe(response => {
        // Manejar la respuesta de la API aquí
        console.log('Tarjeta guardada:', response);
        // Puedes redirigir al usuario o realizar otras acciones necesarias
      });
  }
}
