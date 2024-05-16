import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

  servicio = inject(LibrosService)
  router = inject(ActivatedRoute)

  ngOnInit(): void {
    this.router.params.subscribe(l =>{
      this.servicio.getLibrosUnico(l['idLibros']).subscribe(p =>{
        this.id = p.id
        this.titulo = p.titulo
        this.autor = p.autor
        this.genero = p.genero
        this.anio_publicacion = p.anio_publicacion
      })
    })    
  }

  editar( datos:any){
    this.servicio.putLibros(datos.value).subscribe(() => {
      // window.location.reload();
      window.location.href=('gLibros')
  });
  }

}
