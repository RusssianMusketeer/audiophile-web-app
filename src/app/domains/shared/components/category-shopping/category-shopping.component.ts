import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-shopping',
  standalone: true,
  imports: [],
  templateUrl: './category-shopping.component.html',
  styleUrl: './category-shopping.component.css',
})
export class CategoryShoppingComponent {
  @Input() title: string = '';
  @Input() image: string = '';
}
