import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { FlipModule } from 'ngx-flip';
import { HrmsFlipComponent } from './hrms-flip/hrms-flip.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { WmsComponent } from './wms/wms.component';
import { UmsComponent } from './ums/ums.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent,
    HrmsFlipComponent,
    WmsComponent,
    UmsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    LayoutModule,
    FlipModule,
    NgxChartsModule,
  ],
  bootstrap: [AppComponent],
  exports: [HrmsFlipComponent, WmsComponent, UmsComponent],
  providers: [],
})
export class AppModule {}
