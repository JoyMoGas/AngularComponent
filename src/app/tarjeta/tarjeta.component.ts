import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css',
  standalone: true
})
export class TarjetaComponent {
  @Input() nombre: string = 'Usuario';
  @Input() edad: number = 0;
  
  likes: number = 0;

  darLike() {
    this.likes++;
  }
}
