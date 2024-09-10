import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { RouterLink } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { StateProduct } from '../../../shared/models/productState.models';

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
    image:''
  }

  constructor(private location: LocationStrategy) {
    const state = this.location.getState() as StateProduct;
    this.state = state
  }

   
   

}
