import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalProductsCar = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cart$
    .pipe(
      map( products => products.length)
    ).
    subscribe(total =>  {    
      this.totalProductsCar = total;
    })
  }

}
