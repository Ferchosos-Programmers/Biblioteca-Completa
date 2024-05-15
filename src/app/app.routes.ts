import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';
import { GestionUsuariosComponent } from './pages/gestion-usuarios/gestion-usuarios.component';
import { GestionLibrosComponent } from './pages/gestion-libros/gestion-libros.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { FormularioEditarLibrosComponent } from './pages/formulario-editar-libros/formulario-editar-libros.component';
import { LoginComponent } from './pages/login/login.component';
import { loginGuard, registroGuard } from './guards/login.guard';
import { catalogoGuard, gLibrosGuard, gUsuariosGuard, prestamosGuard } from './guards/proteccion-rutas.guard';
import { RegistroComponent } from './pages/registro/registro.component';
import { Registro2Component } from './pages/registro2/registro2.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'catalogo', component: CatalogoComponent,canActivate:[loginGuard]},
    {path: 'prestamos', component: PrestamosComponent,canActivate:[loginGuard]},
    {path: 'gUsuarios', component: GestionUsuariosComponent,canActivate:[loginGuard]},
    {path: 'gLibros', component: GestionLibrosComponent,canActivate:[loginGuard]},
    {path: 'formulario', component: FormularioComponent,canActivate:[loginGuard]},
    {path: 'editar/:idLibros', component: FormularioEditarLibrosComponent,canActivate:[loginGuard]},
    {path: 'login', component: LoginComponent,canActivate:[catalogoGuard,prestamosGuard,gUsuariosGuard,gLibrosGuard]},
    {path: 'registro', component: RegistroComponent,canMatch:[registroGuard]},
    {path: 'registro', component: Registro2Component},

    {path: "", redirectTo:'home', pathMatch:'full'},
    {path:"**", component:Error404Component}
];
