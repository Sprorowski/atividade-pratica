import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ListContactComponent } from './list-contact/list-contact.component';
import { NewContactComponent } from './new-contact/new-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListContactComponent,
    NewContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
