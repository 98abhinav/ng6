import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.customerService.form.controls;
  constructor(private customerService: CustomerService) {

  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.customerService.form.valid) {
      if(this.customerService.form.get('$key').value == null) {
        //insert
        this.customerService.insertCustomer(this.customerService.form.value)
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 3000);
        this.customerService.form.reset();
      }
    }
    this.submitted = false;
  }

}
