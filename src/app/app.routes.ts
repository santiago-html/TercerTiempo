import { Routes } from '@angular/router';
import { Inicio} from './paginas/inicio/inicio';
import { Contacto } from './paginas/contacto/contacto'; 
import { Ofertas } from './paginas/ofertas/ofertas'; 
import { Productos } from './paginas/productos/productos'; 
import { InicioSesion } from './Auth/inicio-sesion/inicio-sesion'; 
import { Registro } from './Auth/registro/registro'; 
import { Carrito } from './compartidos/carrito/carrito';
import { Favoritos } from './compartidos/favoritos/favoritos';




export const routes: Routes = [
    {path:'',redirectTo: 'inicio',pathMatch:'full'},
    {path:'inicio',component: Inicio },
    {path:'contacto',component: Contacto },
    {path:'ofertas',component: Ofertas },
    {path:'productos', component: Productos},
    {path:'inicioSesion',component: InicioSesion },
    {path:'registro',component: Registro },
    {path: 'carrito', component: Carrito},
    {path: 'favoritos', component: Favoritos},

];


