import { Injectable } from '@angular/core';
import { Producto } from './models/producto';

@Injectable({
  providedIn: 'root',
})
export class ServiciosFavorito {

  arrayfavorit: Producto[] = []

  agregarMegusta(f: Producto) {

    const product = this.arrayfavorit.find(fav => fav.id === f.id)
    if (product) {
      f.cantidad++

    } else {
      this.arrayfavorit.push(f)
    }
  }


  obtenerFavorito() {
    return this.arrayfavorit
  }

  eliminarFavorito(id: Number) {

    this.arrayfavorit = this.arrayfavorit.filter(f => f.id !== id)
  }


}
