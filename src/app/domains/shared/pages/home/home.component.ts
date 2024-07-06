import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { CategoryShoppingComponent } from '../../components/category-shopping/category-shopping.component';
import { CategoryShopping } from '../../models/categoryShopping.models';
import { PromotionComponent } from '../../components/promotion/promotion.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, CategoryShoppingComponent, PromotionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
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
