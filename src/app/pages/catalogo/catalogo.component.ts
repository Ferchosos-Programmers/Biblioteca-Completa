import { Component } from '@angular/core';
import { GaleriaComponent } from '../../components/galeria/galeria.component';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [GaleriaComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {

}
