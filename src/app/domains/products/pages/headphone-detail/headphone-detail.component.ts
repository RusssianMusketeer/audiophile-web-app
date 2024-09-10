import { Component } from '@angular/core';
import { PromotionComponent } from '../../../shared/components/promotion/promotion.component';
import { ShoppingNavComponent } from '../../../shared/components/shopping-nav/shopping-nav.component';
import { ProductDetailsComponent } from '../../components/product-details/product-details.component';


@Component({
  selector: 'app-headphone-detail',
  standalone: true,
  imports: [ShoppingNavComponent, PromotionComponent, ProductDetailsComponent],
  templateUrl: './headphone-detail.component.html',
  styleUrl: './headphone-detail.component.css'
})
export class HeadphoneDetailComponent {

}
