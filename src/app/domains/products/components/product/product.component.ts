import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() image: string = '';
  @Input() index: number | null = null;

  isOdd(index: number | null): string| null {
    if (index != null) {
    return index % 2 ? 'flex-row-reverse' : 'flex-row';
    } else return null
  }
}
