import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-registro2',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './registro2.component.html',
  styleUrl: './registro2.component.css'
})
export class Registro2Component {

  servicio = inject(UsuariosService)

  email:any
  password:any
  token:any


}
