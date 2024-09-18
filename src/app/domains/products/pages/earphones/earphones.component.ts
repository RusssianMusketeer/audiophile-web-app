import { Component } from '@angular/core';
import { HeaderNameComponent } from '../../../shared/components/header-name/header-name.component';
import { ProductComponent } from '../../components/product/product.component';
import { PromotionComponent } from '../../../shared/components/promotion/promotion.component';
import { ShoppingNavComponent } from '../../../shared/components/shopping-nav/shopping-nav.component';
import { Earphones } from '../../../shared/models/earphones.models';

@Component({
  selector: 'app-earphones',
  standalone: true,
  imports: [HeaderNameComponent,ProductComponent,ShoppingNavComponent, PromotionComponent],
  templateUrl: './earphones.component.html',
  styleUrl: './earphones.component.css'
})
export class EarphonesComponent {
  earphones: Array<Earphones> = [
    {
      title: 'YX1 WIRELESS EARPHONES',
      description:
        'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.',
      image:
        'assets/earphones/product-yx1-earphones/desktop/image-category-page-preview.jpg',
        index:null,
        link: 'earphones/YX1_WIRELESS',
        price:599
    },
   
  ];
}
