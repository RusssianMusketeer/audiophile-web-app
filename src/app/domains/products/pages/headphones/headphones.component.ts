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
        price: 2999,
        featureDescription:'Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.\n\nThe advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.'

    },
    {
      title: 'XX99 MARK I HEADPHONES',
      description:
        'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.',
      image:
        'assets/headphones/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg',
        index:null,
        link: 'headphones/XX99_MARK_1',
        price: 1750,
        featureDescription:'As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.\n\nFrom the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is includes with a balanced gold connector.'
    },
    {
      title: 'XX59 HEADPHONES',
      description:
        'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.',
      image: 'assets/headphones/product-xx59-headphones/desktop/image-category-page-preview.jpg',
      index:null,
      link: 'headphones/XX59',
      price: 899,
      featureDescription:'These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.\n\nMore than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.'
    },
  ];
}
