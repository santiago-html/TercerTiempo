import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';

import { ServiciosFavorito } from '../../servicios-favorito';
import { ServiciosCarrito } from '../../servicios-carrito';





@Component({
  selector: 'app-favoritos',
  imports: [],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos implements OnInit {

  productoFav: Producto [] = []

  constructor(
  private ServiciosFavorito: ServiciosFavorito,
  private ServiciosCarrito: ServiciosCarrito
  ){ }
  ngOnInit(){
  this.productoFav = this.ServiciosFavorito.obtenerFavorito();
  }


  

   agregarProducto(p: Producto){
    this.ServiciosCarrito.agregarProducto(p)
    }

  eliminarFavorito(id: number){
  this.ServiciosFavorito.eliminarFavorito(id);
  this.productoFav = this.ServiciosFavorito.obtenerFavorito();
  }
 
  

 
  
}



