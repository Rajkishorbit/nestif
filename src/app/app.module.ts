import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  Routes ,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MainviewComponent } from './mainview/mainview.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';
import { CompanyProfileComponent } from './about/company-profile/company-profile.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { VisionComponent } from './about/vision/vision.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { ServicesComponent } from './services/services.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
// import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderFooterComponent } from './header-footer/header-footer.component';



const appRoutes: Routes = [
  
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'career', component: CareerComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'company-profile',  component:CompanyProfileComponent},
  {path: 'vision',  component:VisionComponent},

 
 

  

  ];

@NgModule({
  declarations: [
    AppComponent,
    MainviewComponent,
    AboutComponent,
    CompanyProfileComponent,
    CareerComponent,
    ContactComponent,
    VisionComponent,
    NavbarComponent,
    ServicesComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    HeaderFooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
   
    RouterModule.forRoot(appRoutes)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
