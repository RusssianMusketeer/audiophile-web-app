import { Component } from '@angular/core';
import { PromotionComponent } from '../../../shared/components/promotion/promotion.component';
import { ShoppingNavComponent } from '../../../shared/components/shopping-nav/shopping-nav.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { ProductDetailsComponent } from '../../components/product-details/product-details.component';

@Component({
  selector: 'app-earphone-detail',
  standalone: true,
  imports: [ShoppingNavComponent, PromotionComponent, ProductDetailsComponent,FeaturesComponent],
  templateUrl: './earphone-detail.component.html',
  styleUrl: './earphone-detail.component.css'
})
export class EarphoneDetailComponent {

}
