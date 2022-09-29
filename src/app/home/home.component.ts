import { Component, getModuleFactory, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  details = [
    {
      names: 'Unresolved',
      nums: '60',
    },
    {
      names: 'Overdue',
      nums: '16',
    },
    {
      names: 'Open',
      nums: '43',
    },
    {
      names: 'On hold',
      nums: '64',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}
  onDashboardClick() {
    this.router.navigateByUrl('dashboard kit');
  }
  onTicketsClick() {
    this.router.navigateByUrl('tickets');
  }
}
