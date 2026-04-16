import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarjetaComponent } from './tarjeta/tarjeta.component';

interface Persona {
  nombre: string;
  edad: number;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TarjetaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  tarjetas = signal<Persona[]>([
    { nombre: 'Juan Pérez', edad: 25 }
  ]);

  agregarTarjeta(nombre: string, edadStr: string) {
    if (nombre && edadStr) {
      this.tarjetas.update(t => [...t, { nombre, edad: parseInt(edadStr, 10) }]);
    }
  }
}
