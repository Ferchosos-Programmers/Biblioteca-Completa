import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {

  id: any;
  titulo: any;
  autor: any;
  genero: any;
  anio_publicacion: any;

  servicio = inject(LibrosService);

  guardar(datos: NgForm) {
    console.log(datos.value);
    this.servicio.postLibros(datos.value).subscribe(() => {
        // window.location.reload();
        window.location.href=('gLibros')
    });
}


}
