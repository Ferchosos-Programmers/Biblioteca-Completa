import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { LibrosService } from '../../services/libros.service';
import { RouterLink } from '@angular/router';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink,FormularioComponent],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  libros: any[]=[];
  id:any;
  
  constructor(private librosService: LibrosService) {}

  ngOnInit(): void {
    this.cargarLibros();
  }

  cargarLibros() {
    this.librosService.getLibros().subscribe(
      (data) => {
        this.libros = data;
      },
      (error) => {
        console.log('Error al cargar los libros', error);
      }
    );
  }

  eliminar(id: any) {
    this.librosService.deleteLibro(id).subscribe(
      () => {
        // Eliminar el producto de la lista local
        this.libros = this.libros.filter(libros => libros.id !== id);
        // Mostrar un mensaje de éxito
        Swal.fire('¡Libro eliminado!', 'El libro ha sido eliminado correctamente.', 'success');
      },
      (error) => {
        console.log('Error al eliminar el producto', error);
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
