import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ums',
  templateUrl: './ums.component.html',
  styleUrls: ['./ums.component.scss'],
})
export class UmsComponent implements OnInit {
  flip = false;
  single = [
    {
      name: 'Angular 10',
      value: 5,
    },
    {
      name: 'Java 11',
      value: 4,
    },
    {
      name: 'Spring-boot 2.1.6',
      value: 4,
    },
    {
      name: 'Hibernate 5.3.10',
      value: 4,
    },
    {
      name: 'Typescript',
      value: 5,
    },
    {
      name: 'PostgreSQL 9.5',
      value: 4,
    },
  ];
  view: [number, number] = [480, 300];
  view_1: [number, number] = [300, 250];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = true;
  legendPosition: any = 'right';
  legendPosition_1: any = 'bottom';

  // colorScheme = {
  //   domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  // };
  constructor(
    public dialogRef: MatDialogRef<UmsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    dialogRef.disableClose = true;
  }

  rotate() {
    this.flip = !this.flip;
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  ngOnInit(): void {}
}
