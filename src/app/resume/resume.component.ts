import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HrmsFlipComponent } from '../hrms-flip/hrms-flip.component';
import { UmsComponent } from '../ums/ums.component';
import { WmsComponent } from '../wms/wms.component';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  single = [
    {
      name: 'Angular 6, 8, 10',
      value: 5,
    },
    {
      name: 'Flex Layout & Angular Material',
      value: 5,
    },
    {
      name: 'Java 11',
      value: 4,
    },
    {
      name: 'Hibernate',
      value: 4,
    },
    {
      name: 'MySQL',
      value: 5,
    },
    {
      name: 'PostgreSQL',
      value: 5,
    },
    {
      name: 'Spring boot',
      value: 4,
    },
    {
      name: 'Postman',
      value: 5,
    },
    {
      name: 'PgAdmin',
      value: 5,
    },
    {
      name: 'Eclipse',
      value: 5,
    },
    {
      name: 'Visual Studio Code',
      value: 5,
    },
  ];

  view: [number, number] = [400, 300];
  view_1: [number, number] = [300, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Technologies';
  showYAxisLabel = true;
  yAxisLabel = 'Rating';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  // colorScheme = {
  //   domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  // };

  constructor(public dialog: MatDialog) {}

  onClick() {
    const dialogRef = this.dialog.open(HrmsFlipComponent, {
      width: '650px',
      height: '580px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  onClickWMS() {
    const dialogRef = this.dialog.open(WmsComponent, {
      width: '650px',
      height: '580px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  onClickUMS() {
    const dialogRef = this.dialog.open(UmsComponent, {
      width: '650px',
      height: '580px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  onSelect(event: any) {
    console.log(event);
  }

  ngOnInit(): void {}
}
