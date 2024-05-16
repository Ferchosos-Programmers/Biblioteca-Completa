import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  servicio = inject(UsuariosService)
  constructor(private router:Router){}
  token: any
  roles:any

  ///Cerrar Sesion
  logout() {
    localStorage.removeItem("token")
    window.location.href=('login')
  }
  
  ///Ocultar ventanas
  ocultar = localStorage.getItem('token')
  
  ///Roles par anavegacion
  permiso(){
    this.servicio.getUsuarios().subscribe(p =>{
      this.roles = p.accessToken
      if (this.roles == 'administrador') {
        localStorage.setItem("token",'true')
        window.location.href=('gUsuarios')
      }else{
        localStorage.setItem("token",'true')
        window.location.href=('gUsuarios')
      }
      
    })
  }
  
}
