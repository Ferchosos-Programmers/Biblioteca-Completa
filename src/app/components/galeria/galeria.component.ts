import { Component } from '@angular/core';
import { LibrosService } from '../../services/libros.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {

  libros: any[] = []; // Inicializar productos como un array vacío
  filtroGenero: string = '';
  generoUnico: string[] = [];

  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
    this.librosService.getLibros().subscribe((libros: any[]) => {
      this.libros = libros; // Asignar productos después de obtenerlos
      this.calcularGeneroUnico();
    });
  }

  calcularGeneroUnico(): void {
    const generoSet = new Set<string>();
    this.libros.forEach(libros => {
      generoSet.add(libros.genero);
    });
    this.generoUnico = Array.from(generoSet);
  }

}
