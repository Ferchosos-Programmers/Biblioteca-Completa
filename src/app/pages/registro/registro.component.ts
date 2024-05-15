import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  servicio = inject(UsuariosService)

  email:any
  password:any
  edad:any
  roles:any
  token:any

  registro(datos:any){
    this.servicio.postUser2(datos.value).subscribe()
    window.location.reload()
  }
}
