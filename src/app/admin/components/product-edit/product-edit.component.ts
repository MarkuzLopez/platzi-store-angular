import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { MyValidators } from 'src/app/utils/validatrors';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  form!: FormGroup;
  id!: string;

  constructor(private formbuilder: FormBuilder,
    private serviceProduct: ProductsService,
    private router: Router, 
    private activateRoute: ActivatedRoute) {
      this.buildForm();
     }

  ngOnInit(): void {
    //this.getProduct()
    this.activateRoute.params.subscribe(params => { 
     this.id = params.id;
      this.getProduct(this.id);
    });
  }

  private buildForm() { 
    this.form =  this.formbuilder.group({
       title: ['', [Validators.required, Validators.minLength(10)]],
       price: ['', [Validators.required, MyValidators.isPriceValid]],
       image: [''],
       description: ['', [Validators.required]]
    })
  }

  getProduct(id: string): void {
    this.serviceProduct.getProduct(id).subscribe(product => {
      this.form.patchValue(product)      
    })
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if(this.form.valid) {
      const producto = this.form.value;
      this.serviceProduct.updateProduct(this.id, producto)
      .subscribe((newProduct) => {      
      this.router.navigate(['./admin/products']);
      })
    }    
  }

  get priceField() {
    return this.form.get('price');
  }

}
