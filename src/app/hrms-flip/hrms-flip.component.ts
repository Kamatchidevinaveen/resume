import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hrms-flip',
  templateUrl: './hrms-flip.component.html',
  styleUrls: ['./hrms-flip.component.scss'],
})
export class HrmsFlipComponent implements OnInit {
  flip = false;
  constructor() {}

  rotate() {
    this.flip = !this.flip;
  }

  ngOnInit(): void {}
}
