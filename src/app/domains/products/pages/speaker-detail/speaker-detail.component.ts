import { Component } from '@angular/core';
import { PromotionComponent } from '../../../shared/components/promotion/promotion.component';
import { ShoppingNavComponent } from '../../../shared/components/shopping-nav/shopping-nav.component';
import { ProductDetailsComponent } from '../../components/product-details/product-details.component';
import { FeaturesComponent } from '../../components/features/features.component';


@Component({
  selector: 'app-speaker-detail',
  standalone: true,
  imports: [ShoppingNavComponent, PromotionComponent, ProductDetailsComponent,FeaturesComponent],
  templateUrl: './speaker-detail.component.html',
  styleUrl: './speaker-detail.component.css'
})
export class SpeakerDetailComponent {

}
