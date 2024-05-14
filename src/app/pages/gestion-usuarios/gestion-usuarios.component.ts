import { Component } from '@angular/core';
import { Tabla2Component } from '../../components/tabla2/tabla2.component';

@Component({
  selector: 'app-gestion-usuarios',
  standalone: true,
  imports: [Tabla2Component],
  templateUrl: './gestion-usuarios.component.html',
  styleUrl: './gestion-usuarios.component.css'
})
export class GestionUsuariosComponent {

}
