import { Component } from '@angular/core';
import { CategoryShopping } from '../../models/categoryShopping.models';
import { CategoryShoppingComponent } from '../category-shopping/category-shopping.component';


@Component({
  selector: 'app-shopping-nav',
  standalone: true,
  imports: [CategoryShoppingComponent],
  templateUrl: './shopping-nav.component.html',
  styleUrl: './shopping-nav.component.css'
})
export class ShoppingNavComponent {
  shoppingCategories: Array<CategoryShopping> = [
    {
      title: 'HEADPHONES',
      image: 'assets/shared/desktop/image-category-thumbnail-headphones.png',
    },
    {
      title: 'SPEAKERS',
      image: 'assets/shared/desktop/image-category-thumbnail-speakers.png',
    },
    {
      title: 'EARPHONES',
      image: 'assets/shared/desktop/image-category-thumbnail-earphones.png',
    },
  ];
}
