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
  imagen: string = ''; // Variable para almacenar la URL de la imagen

  constructor(private servicio: LibrosService) {}

  guardar(datos: NgForm) {
    console.log(datos.value);
    // Enviar datos y URL de la imagen al servicio para el registro en la base de datos
    const datosConImagen = { ...datos.value, imagen: this.imagen };
    this.servicio.postLibros(datosConImagen).subscribe(() => {
      // Redireccionar después de guardar
      window.location.href = 'gLibros';
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      // Convertir la imagen en una URL
      this.imagen = reader.result as string;
    };

    reader.readAsDataURL(file);
  }


}
