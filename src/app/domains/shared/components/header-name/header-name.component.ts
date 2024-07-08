import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-name',
  standalone: true,
  imports: [],
  templateUrl: './header-name.component.html',
  styleUrl: './header-name.component.css'
})
export class HeaderNameComponent {
  @Input() title: string = "";
}
