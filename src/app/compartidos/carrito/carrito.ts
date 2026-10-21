import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ServiciosCarrito } from '../../servicios-carrito';

@Component({
  selector: 'app-carrito',
  imports: [],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito implements OnInit {

  carritoProducto: Producto[] = [];

  mostrarFactura: boolean = false;
  fechaFactura: string = '';

  constructor(
    private servicioCarrito: ServiciosCarrito
  ) {}

  ngOnInit(): void {
    this.actualizarCarrito();
  }

  actualizarCarrito(): void {
    this.carritoProducto =
      this.servicioCarrito.obtenerProducto();
  }

  aumentar(id: number): void {
    this.servicioCarrito.aumentarLectura(id);
    this.actualizarCarrito();
  }

  disminuir(id: number): void {
    this.servicioCarrito.disminuirLecturas(id);
    this.actualizarCarrito();
  }

  eliminar(id: number): void {
    this.servicioCarrito.eliminarProducto(id);
    this.actualizarCarrito();

    if (this.carritoProducto.length === 0) {
      this.mostrarFactura = false;
    }
  }

  calcularTotal(): number {
    return this.carritoProducto.reduce(
      (total: number, producto: Producto) => {
        return total + producto.precio * producto.cantidad;
      },
      0
    );
  }

  finalizarCompra(): void {
    if (this.carritoProducto.length === 0) {
      alert('El carrito está vacío');
      return;
    }

    this.fechaFactura = new Date().toLocaleString('es-AR');
    this.mostrarFactura = true;
  }

  cerrarFactura(): void {
    this.mostrarFactura = false;
  }

  imprimirFactura(): void {
    window.print();
  }
}
