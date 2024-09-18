import { Component } from '@angular/core';
import { HeaderNameComponent } from '../../../shared/components/header-name/header-name.component';
import { Speakers } from '../../../shared/models/speakers.models';
import { ProductComponent } from '../../components/product/product.component';
import { ShoppingNavComponent } from '../../../shared/components/shopping-nav/shopping-nav.component';
import { PromotionComponent } from '../../../shared/components/promotion/promotion.component';

@Component({
  selector: 'app-speakers',
  standalone: true,
  imports: [HeaderNameComponent, ProductComponent,ShoppingNavComponent, PromotionComponent],
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.css'
})
export class SpeakersComponent {

  speakers: Array<Speakers> = [
    {
      title: 'ZX9 SPEAKER',
      description:
        'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.',
      image:
        'assets/speaker/product-zx9-speaker/desktop/image-category-page-preview.jpg',
        index:null,
        link: 'speakers/ZX9_SPEAKERS',
        price:4500
    },
    {
      title: 'ZX7 SPEAKER',
      description:
        'Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.',
      image:
        'assets/speaker/product-zx7-speaker/desktop/image-category-page-preview.jpg',
        index:null,
        link: 'speakers/ZX7_SPEAKERS',
        price:3500
    }
  ];

}
