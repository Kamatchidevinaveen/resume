import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  single = [
    {
      name: 'Germany',
      value: 8940000,
    },
    {
      name: 'USA',
      value: 5000000,
    },
    {
      name: 'France',
      value: 7200000,
    },
    {
      name: 'UK',
      value: 6200000,
    },
    {
      name: 'Italy',
      value: 4200000,
    },
    {
      name: 'Spain',
      value: 8200000,
    },
  ];
  view: [number, number] = [500, 400];

  // options
  showLegend: boolean = true;
  showLabels: boolean = true;

  // colorScheme = {
  //   domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  // };

  constructor() {}

  onSelect(event: any) {
    console.log(event);
  }

  ngOnInit(): void {}
}
