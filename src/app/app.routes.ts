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
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'catalogo', component: CatalogoComponent,canActivate:[loginGuard]},
    {path: 'prestamos', component: PrestamosComponent,canActivate:[loginGuard]},
    {path: 'gUsuarios', component: GestionUsuariosComponent,canActivate:[loginGuard]},
    {path: 'gLibros', component: GestionLibrosComponent,canActivate:[loginGuard]},
    {path: 'formulario', component: FormularioComponent,canActivate:[loginGuard]},
    {path: 'editar/:idLibros', component: FormularioEditarLibrosComponent,canActivate:[loginGuard]},
    {path: 'login', component: LoginComponent},

    {path: "", redirectTo:'home', pathMatch:'full'},
    {path:"**", component:Error404Component}
];
