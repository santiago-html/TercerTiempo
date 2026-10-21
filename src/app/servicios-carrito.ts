import { Injectable } from '@angular/core';
import { Producto } from './models/producto';



@Injectable({
  providedIn: 'root',
})
export class ServiciosCarrito {

favoritos: Producto [] = [] 

  agregarProducto(p: Producto){
  
     this.favoritos.push(p);
  }

  obtenerProducto(){
    return this.favoritos;
  }
  
  aumentarLectura(id: number){
  
  const producto = this.favoritos.find(p => p.id === id);
  
  if(producto){
  
  producto.cantidad++;

  }

   }

  disminuirLecturas(id: number){
    
const producto = this.favoritos.find(p => p.id === id);

if(producto && producto.cantidad > 1){

producto.cantidad--;
}
}

eliminarProducto(id: number){
  this.favoritos = this.favoritos.filter(p => p.id !== id)
}

}