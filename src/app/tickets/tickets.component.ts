import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { DatePipe } from '@angular/common';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss'],
})
export class TicketsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  color: string = '';
  name: string = '';
  email: string = '';
  userName: string = '';
  password: string = '';
  confirmpassword: string = '';
  hide: boolean = true;
  isButtonDisabled: boolean = false;
  isShow: boolean = true;
  today = new Date();
  amount = 234.564;
  para = ' paragraph';
  pi = 3.14;
  a: number = 0.209;
  b: number = 1.3995;

  constructor(private router: Router, private datePipe: DatePipe) {}

  ngOnInit(): void {
    console.log(
      'changed date :- ',
      this.datePipe.transform(this.today, 'MM-dd-yyyy')
    );
  }
  changeColor() {
    alert('i m working');
  }
  onDashboardClick() {
    this.router.navigateByUrl('dashboard kit');
  }
  onTicketsClick() {
    this.router.navigateByUrl('tickets');
  }
  onRegisterClick() {
    console.log('name is' + ' ' + this.name);
    console.log('email is' + ' ' + this.email);
    console.log('user name is' + ' ' + this.userName);
    console.log('password is' + ' ' + this.password);
    console.log('confirm password is' + ' ' + this.confirmpassword);
  }
}
