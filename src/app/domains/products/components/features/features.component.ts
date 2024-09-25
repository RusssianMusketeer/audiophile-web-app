import { CommonModule, LocationStrategy } from '@angular/common';
import { Component } from '@angular/core';
import { StateProduct } from '../../../shared/models/productState.models';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent {
  
  state: StateProduct;
  
  constructor(private location: LocationStrategy) {
    const state = this.location.getState() as StateProduct;
    this.state = state
  }


}
