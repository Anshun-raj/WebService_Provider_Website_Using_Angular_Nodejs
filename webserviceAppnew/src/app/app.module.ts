import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './SubComponent/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './Routes/home/home.component';
import { AboutComponent } from './Routes/about/about.component';
import { ServiceComponent } from './Routes/service/service.component';
import { TeamComponent } from './Routes/team/team.component';
import { ContactComponent } from './Routes/contact/contact.component';
import { FooterComponent } from './SubComponent/footer/footer.component';
import { CustomDirective } from './custom.directive';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InfoService } from './info.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
    CustomDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    InfoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
