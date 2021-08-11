import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../core/services/cart/cart.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() producto!: Product;
  //   @Output() productClicked!: EventEmitter<any>;
  @Output() productClicked: EventEmitter<any> =  new EventEmitter();

  constructor(private cartService: CartService) { }

  ngOnInit(): void { }

  addCar(): void{
    // this.productClicked.emit(this.producto.id);
    this.cartService.addCart(this.producto)
 }

}
