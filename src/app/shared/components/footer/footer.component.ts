import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailField!: FormControl

  constructor() { 
    this.emailField =  new FormControl('', [
      Validators.required,
      Validators.email
    ]);
    // escuchar cambios* this.emailField.valueChanges.subscribe(value => { 
    //   console.log('====================================');
    //   console.log(value);
    //   console.log('====================================');
    // })
  }

  ngOnInit(): void {
  }

  sendEmail() { 
    if(this.emailField.valid) { 
      console.log('====================================');
      console.log(this.emailField);
      console.log('====================================');
    }
  }

}
