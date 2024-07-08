import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-shopping',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './category-shopping.component.html',
  styleUrl: './category-shopping.component.css',
})
export class CategoryShoppingComponent {
  @Input() title: string = '';
  @Input() image: string = '';
}
