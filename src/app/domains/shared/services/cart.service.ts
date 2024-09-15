import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);

  constructor() { }

  addToCart(product:Product) {
    this.cart.update(state => [...state,product])
  }
}