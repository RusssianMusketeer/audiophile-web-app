import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ShoppingNavComponent } from '../shopping-nav/shopping-nav.component';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, ShoppingNavComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

  shown: boolean = false;

  constructor ( private router:  Router ) {
    router.events.subscribe( () => ( this.shown = false ))}
  
  styleClassNotShown: string =
    'absolute -translate-y-[25rem] transition z-[1] duration-1000 ease-in-out bg-white w-full';
  styleClassShown: string =
    'absolute z-[1] transition w-full bg-white duration-1000 ease-in-out translate-y-0';

  showMenu() {
    this.shown = !this.shown;
  }
}
