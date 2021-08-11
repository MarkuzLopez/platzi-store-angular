import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/services/products/products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  title = 'platzi-store';

  items = ['Gaby', 'Eliza', 'Nei'];

  power: number = 0;

  products: Product[] = [];

  // products: Product[] = [
  //   {
  //     id: '1',
  //     image: 'assets/images/camiseta.png',
  //     title: 'Camiseta',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '2',
  //     image: 'assets/images/hoodie.png',
  //     title: 'Hoodie',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '3',
  //     image: 'assets/images/mug.png',
  //     title: 'Mug',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '4',
  //     image: 'assets/images/pin.png',
  //     title: 'Pin',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '5',
  //     image: 'assets/images/stickers1.png',
  //     title: 'Stickers',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '6',
  //     image: 'assets/images/stickers2.png',
  //     title: 'Stickers',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   }
  // ];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    console.log(this.products, 'padsadas');
    this.getProducts();
  }

  getProducts() { 
    this.productService.getAllProducts().subscribe((product) => {
      this.products = product;
    });
  }

  addItems(): void {
    this.items.push('nuevo item');
  }

  deleteItems(index: number): void {
    this.items.splice(index, 1);
  }

  clickProduct(id: number): void {
    console.log('product', id);
  }

}
