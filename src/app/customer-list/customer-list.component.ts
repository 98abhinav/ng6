import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

/*export interface CustomerInfo {
  fullName: string;
  email: string;
  phone: number;
  location: string;
}

const ELEMENT_DATA: CustomerInfo[] = [
  {fullName: 'ABC-1', email: 'Hydrogen', phone: 5678, location: 'H'},
  {fullName: 'ABC-2', email: 'Helium', phone: 987, location: 'He'},
  {fullName: 'ABC-3', email: 'Lithium', phone: 2342, location: 'Li'},
  {fullName: 'ABC-4', email: 'Beryllium', phone: 23423, location: 'Be'},
  {fullName: 'ABC-5', email: 'Boron', phone: 1234, location: 'B'},
  {fullName: 'ABC-6', email: 'Carbon', phone: 1234, location: 'C'},
  {fullName: 'ABC-7', email: 'Nitrogen', phone: 143434, location: 'N'},
  {fullName: 'ABC-8', email: 'Oxygen', phone: 15342, location: 'O'},
  {fullName: 'ABC-9', email: 'Fluorine', phone: 189984, location: 'F'},
  {fullName: 'ABC-10', email: 'Neon', phone: 201797, location: 'Ne'},
];*/

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  displayedColumns: string[] = ['fullName', 'email', 'phone', 'location'];
  dataSource = [];

  constructor( private coustomerService: CustomerService) { }

  ngOnInit() {
    this.coustomerService.getCustomers().subscribe(list => {
      this.dataSource = list.map(item => {
        return{
          $key: item.key,
          ...item.payload.val()
        };
      });
    });
  }

}
