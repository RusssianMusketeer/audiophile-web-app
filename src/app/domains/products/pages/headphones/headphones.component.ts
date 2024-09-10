import { Component } from '@angular/core';
import { HeaderNameComponent } from '../../../shared/components/header-name/header-name.component';
import { ProductComponent } from '../../components/product/product.component';
import { Headphones } from '../../../shared/models/headphones.models';
import { ShoppingNavComponent } from '../../../shared/components/shopping-nav/shopping-nav.component';
import { PromotionComponent } from '../../../shared/components/promotion/promotion.component';

@Component({
  selector: 'app-headphones',
  standalone: true,
  imports: [HeaderNameComponent, ProductComponent,ShoppingNavComponent, PromotionComponent],
  templateUrl: './headphones.component.html',
  styleUrl: './headphones.component.css',
})
export class HeadphonesComponent {
  headphones: Array<Headphones> = [
    {
      title: 'XX99 MARK II HEADPHONES',
      description:
        'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
      image:
        'assets/headphones/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg',
        index:null,
        link: 'headphones/XX99_MARK_2',
        price: 2999

    },
    {
      title: 'XX99 MARK I HEADPHONES',
      description:
        'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
      image:
        'assets/headphones/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg',
        index:null,
        link: 'headphones/XX99_MARK_1',
        price: 1750
    },
    {
      title: 'XX59 HEADPHONES',
      description:
        'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
      image: 'assets/headphones/product-xx59-headphones/desktop/image-category-page-preview.jpg',
      index:null,
      link: 'headphones/XX59',
      price: 899
    },
  ];
}
