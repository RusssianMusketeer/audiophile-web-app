import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { CategoryShoppingComponent } from '../../components/category-shopping/category-shopping.component';
import { PromotionComponent } from '../../components/promotion/promotion.component';
import { ShoppingNavComponent } from '../../components/shopping-nav/shopping-nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, CategoryShoppingComponent, PromotionComponent, ShoppingNavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
}
