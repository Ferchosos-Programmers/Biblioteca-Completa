import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  servicio = inject(UsuariosService)

  email: any
  password: any
  token: any

  login(formulario:any){
    this.servicio.postUser(formulario.value).subscribe(p =>{
      this.token = p.accessToken
      console.log(this.token);
      
    })
  }
}
