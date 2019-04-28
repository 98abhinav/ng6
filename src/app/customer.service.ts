import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  coustomerList: AngularFireList<any>;
  form = new FormGroup({
    $key: new FormControl(null),
    fullName:  new FormControl('', Validators.required),
    email : new FormControl('', [Validators.required, Validators.email]),
    mobile : new FormControl('', [ Validators.required, Validators.minLength(8)]),
    location: new FormControl('')
  });

  constructor(private firebase: AngularFireDatabase) { }

  getCustomers() {
    this.coustomerList = this.firebase.list('customers');
    return this.coustomerList.snapshotChanges();
  }

  insertCustomer(customer) {
    this.coustomerList.push({
      fullName: customer.fullName,
      email: customer.email,
      mobile: customer.mobile,
      location: customer.location
    });
  }

  populateForm(customer){

  }

}
