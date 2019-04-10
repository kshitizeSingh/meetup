import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import{AppRoutingModule} from './app-routing.module';
//angular map
import { AgmCoreModule } from '@agm/core';

//mdb libraries
import { NavbarModule, ButtonsModule, WavesModule, CardsFreeModule} from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupsSeviceService } from './groups/groups-sevice.service';
import { DataShareServiceService } from './data-share-service.service';
import { ShowGroupComponent } from './show-group/show-group.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service'

@NgModule({
  imports:      [ BrowserModule, FormsModule, NavbarModule, WavesModule, AppRoutingModule,CardsFreeModule,ButtonsModule,HttpClientModule,ReactiveFormsModule,
  AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
    })],
  declarations: [ AppComponent, HelloComponent, DashboardComponent, HomeComponent, GroupsComponent, ShowGroupComponent, LoginComponent ],
  bootstrap:    [ AppComponent ],
  providers: [GroupsSeviceService, DataShareServiceService, LoginService]
})
export class AppModule { }
