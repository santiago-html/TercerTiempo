import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { ServiciosCarrito } from '../../servicios-carrito';
import { ServiciosFavorito } from '../../servicios-favorito';

@Component({
  selector: 'app-ofertas',
  imports: [],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css',
})
export class Ofertas {

    constructor(
  private serviciosCarrito:  ServiciosCarrito,
  private serviciosFavorito: ServiciosFavorito
  ){}

  productos : Producto [] = [
  
    {
  
    id: 2,
    nombre: 'KRK classic 8',
    descripcion: 'los mejores',
    precio: 2500,
    stock: 5,
    imagen: 'monitores-krk-blancos.jpg',
    categoria: 'monitores',
    disponibilidad: true,
    cantidad: 1,
  
  },
  
  {
    id: 3,
    nombre: 'YAMAHA HS8',
    descripcion: '',
    precio: 2300,
    stock: 5,
    imagen: '/monitores-yamaha-HS8.png',
    categoria: 'monitores',
    disponibilidad: true,
    cantidad: 1,
  
  },
  {
    id: 5,
    nombre: 'Audio Apollo TB3',
    descripcion: '',
    precio: 1000,
    stock: 5,
    imagen: '/apolo tb3.webp',
    categoria: 'interfaces',
    disponibilidad: true,
    cantidad: 1,
  
  },
  {
    id: 3,
    nombre: 'Audio Apollo TB3',
    descripcion: '',
    precio: 2200,
    stock: 5,
    imagen: '/apollo x duo.webp',
    categoria: 'interfaces',
    disponibilidad: false,
    cantidad: 1,
  
  },
  {
    id: 7,
    nombre: 'RODE NT2A',
    descripcion: '',
    precio: 600,
    stock: 5,
    imagen: '/microfono-RODE-NT2A.jpg',
    categoria: 'microfonos',
    disponibilidad: true,
    cantidad: 1,
  
  },
  {
    id: 8,
    nombre: 'RODE NT1',
    descripcion: '',
    precio: 2200,
    stock: 5,
    imagen: '/microfono-RODE-NT1.jpg',
    categoria: 'microfonos',
    disponibilidad: false,
    cantidad: 1,
  
  },
  {
    id: 10,
    nombre: 'Audio-Technica ATH-m50x',
    descripcion: '',
    precio: 300,
    stock: 5,
    imagen: '/auris-MTH M50X.jpg',
    categoria: 'microfonos',
    disponibilidad: true,
    cantidad: 1
  
  },
  {
    id: 11,
    nombre: 'DT 990 PRO',
    descripcion: '',
    precio: 2200,
    stock: 5,
    imagen: '/auris-DT 990 pro.jpg',
    categoria: 'microfonos',
    disponibilidad: false,
  cantidad: 1
  },
  ]
  
  
   agregarProducto(p: Producto){
      this.serviciosCarrito.agregarProducto(p)
      }
  
     agregarFavorito(p: Producto){
  
  this.serviciosFavorito.agregarMegusta(p)
  
     }
}


