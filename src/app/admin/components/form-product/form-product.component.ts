import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { MyValidators } from 'src/app/utils/validatrors';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {

  form!: FormGroup;

  constructor(private formbuilder: FormBuilder, 
    private serviceProduct: ProductsService, 
    private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() { 
    this.form =  this.formbuilder.group({ 
       id: ['',[Validators.required]],
       title: ['', [Validators.required]],
       price: ['', [Validators.required, MyValidators.isPriceValid]],
       image: [''],
       description: ['', [Validators.required]]
    })
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if(this.form.valid) { 
      const producto = this.form.value;
      this.serviceProduct.createProduct(producto)
      .subscribe((newProduct) => {
      console.log("🚀 ~ file: form-product.component.ts ~ line 36 ~ FormProductComponent ~ .subscribe ~ newProduct", newProduct);
      this.router.navigate(['./admin/products']);
      })
    }
  }

  get priceField() {
    return this.form.get('price');
  }

}
