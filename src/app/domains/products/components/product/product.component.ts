import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ButtonComponent, CommonModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() index: number | null = null;
  @Input() link: string = '';

  isOdd(index: number | null): string| null {
    if (index != null) {
    return index % 2 ? 'flex-row-reverse' : 'flex-row';
    } else return null
  }

  public product: object  = {}
  
  ngOnInit() {
    this.product = { title: this.title , description: this.description, image:this.image }
  }


}
