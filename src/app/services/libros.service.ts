import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  constructor(private http: HttpClient) {}

  private API_LIBROS = 'http://localhost:3001/libros';

  ////Leer - GET
  getLibros(): Observable<any> {
    return this.http.get(this.API_LIBROS);
  }

  getLibrosUnico(id: any): Observable<any> {
    return this.http.get(`${this.API_LIBROS}/${id}`);
  }
  ///GUARDAR - POST
  postLibros(libros: JSON): Observable<any> {
    return this.http.post(this.API_LIBROS, libros);
  }
  ///EDITAR - PUT
  putLibros(libros:any): Observable<any> {
    return this.http.put(`${this.API_LIBROS}/${libros.id}`,libros);
  }
  ////Eliminar - DELETE
  deleteLibro(id: any): Observable<any> {
    return this.http.delete(`${this.API_LIBROS}/${id}`);
  }
}
