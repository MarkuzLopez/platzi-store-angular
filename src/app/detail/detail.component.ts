import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { ProductsService } from '../core/services/products/products.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  producto!: Product;

  constructor(private router: ActivatedRoute, private serviceProduct: ProductsService,) {
  }

  ngOnInit(): void {
    this.router.params.subscribe(param => {
      this.getProduct(param.id)
      // this.producto = this.serviceProduct.getProduct(param.id);
    })

  }

  getProduct(id: string){
    this.serviceProduct.getProduct(id).subscribe(product => {
      this.producto = product;    
    })
  }


  create() { 
    const newProduct: Product = {
      id: '22',
      title: 'Prueba',
      image: 'assets/images/camiseta.png',
      price: 5000,
      description: 'nuevo producto'
    };

    this.serviceProduct.createProduct(newProduct).subscribe(() => { 
      console.log('se ceo');
    });
  }

  update(){
    const updateProduct: Partial<Product> = { 
      price: 55,
      description: 'edicion titulo'
    };
    this.serviceProduct.updateProduct('2', updateProduct).subscribe(product => { 
      console.log(product, '** product');      
    })
  }

  delete() { 
    this.serviceProduct.deleleteProduct('22').subscribe(() => { 
      console.log('producto');      
    })
  }

}
