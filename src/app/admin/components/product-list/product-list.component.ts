import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(private serviceProducts: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.serviceProducts.getAllProducts().subscribe((products: any) => { 
      console.log("🚀 ~ file: product-list.component.ts ~ line 23 ~ ProductListComponent ~ this.serviceProducts.getAllProducts ~ products", products)
      this.products = products
    })
  }

  deleteProduct(id: any) { 
    this.serviceProducts.deleleteProduct(id)
    .subscribe(rta => { 
      console.log(rta, 'tra');
      this.getProducts();
    })
  }

}
