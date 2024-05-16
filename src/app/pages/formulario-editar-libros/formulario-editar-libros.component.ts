import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LibrosService } from '../../services/libros.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-formulario-editar-libros',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './formulario-editar-libros.component.html',
  styleUrl: './formulario-editar-libros.component.css'
})
export class FormularioEditarLibrosComponent {

  id: any;
  titulo: any;
  autor: any;
  genero: any;
  anio_publicacion: any;
  imagen: string = '';

  constructor(private route: ActivatedRoute, private servicio: LibrosService) { }

  ngOnInit(): void {
    // Obtener el ID del libro de los parámetros de la ruta
    this.id = this.route.snapshot.paramMap.get('id');

    // Obtener los detalles del libro a editar y prellenar el formulario
    this.servicio.getLibrosUnico(this.id).subscribe(libro => {
      this.titulo = libro.titulo;
      this.autor = libro.autor;
      this.genero = libro.genero;
      this.anio_publicacion = libro.anio_publicacion;
      // También puedes cargar la imagen aquí si tienes la URL en la base de datos
    });
  }

  guardar(formulario: NgForm) {
    const datos = {
      id: this.id,
      titulo: this.titulo,
      autor: this.autor,
      genero: this.genero,
      anio_publicacion: this.anio_publicacion,
      imagen: this.imagen // Puedes enviar la URL de la imagen al servicio
    };

    // Enviar los datos actualizados al servicio para actualizar el libro en la base de datos
    this.servicio.putLibros(datos).subscribe(() => {
      // Redirigir después de guardar
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

  cancelar() {
    window.location.href = 'gLibros';
  }

}
