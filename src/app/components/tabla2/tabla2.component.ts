import { Component } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import Swal from 'sweetalert2';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla2',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tabla2.component.html',
  styleUrl: './tabla2.component.css'
})
export class Tabla2Component {
  
  usuarios: any[]=[];
  id:any;

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.cargarUsuario();
  }

  cargarUsuario() {
    this.usuariosService.getUsuarios().subscribe(
      (data) => {
        this.usuarios = data;
      },
      (error) => {
        console.log('Error al cargar los usuario', error);
      }
    );
  }

  eliminar(id: any) {
    this.usuariosService.deleteUsuario(id).subscribe(
      () => {
        // Eliminar el usuario de la lista local
        this.usuarios = this.usuarios.filter(usuarios => usuarios.id !== id);
        // Mostrar un mensaje de éxito
        Swal.fire('¡Usuario eliminado!', 'El usuario ha sido eliminado correctamente.', 'success');
      },
      (error) => {
        console.log('Error al eliminar el usuario', error);
        // Mostrar un mensaje de error si la eliminación falla
        Swal.fire('Error', 'No se pudo eliminar el libro.', 'error');
      }
    );
  }

  confirmarEliminar(id: string) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.eliminar(id);
      }
    });
  }
}
