import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-kit',
  templateUrl: './dashboard-kit.component.html',
  styleUrls: ['./dashboard-kit.component.scss'],
})
export class DashboardKitComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  visible: boolean = true;
  changeType: boolean = true;
  viewpass() {
    this.visible = !this.visible;
    this.changeType = !this.changeType;
  }
}
