import { Component, Input, inject, signal } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { RouterLink } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { StateProduct } from '../../../shared/models/productState.models';
import { CartService } from '../../../shared/services/cart.service';
import { Product } from '../../../shared/models/products.models';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [ButtonComponent,RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() price: number | null = null;
  @Input() image: string = '';

  state: StateProduct = {
    title:'',
    description:'',
    price:0,
    image:'',
    quantity:0,
    featureDescription:'',
    boxMaterial: {}
  }

   quantity = signal<number>(0)

   updateQuantity(item:number) {
    if (item>= 0){
    this.quantity.update(number => item)
    }
  }

  private cartService = inject(CartService);
  addToCart(product: Product) {
    product.quantity = this.quantity()
    this.cartService.addToCart(product)
  }

  constructor(private location: LocationStrategy) {
    const state = this.location.getState() as StateProduct;
    this.state = state
  }

   

}
