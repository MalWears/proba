import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WomanComponent } from './woman/woman.component';
import { ManComponent } from './man/man.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations" ;
import { MatIconModule } from '@angular/material/icon';
import { MalWearsComponent } from './malwears/malwears.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { WomanDetailComponent } from './woman/woman-detail/woman-detail.component';
import { WomanListComponent } from './woman/woman-list/woman-list.component';
import { WomanStartComponent } from './woman/woman-start/woman-start.component';
import { WomanEditComponent } from './woman/woman-edit/woman-edit.component';

import { WomanItemComponent } from './woman/woman-list/woman-item/woman-item.component';
import { HeaderComponent } from './header/header.component';
import { ProductService } from './woman/product.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WomanComponent,
    ManComponent,
    MalWearsComponent,
    WomanDetailComponent,
    WomanListComponent,
    WomanItemComponent,
    DropdownDirective,
    WomanStartComponent,
    WomanEditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [ProductService],
  bootstrap: [AppComponent,]
})
export class AppModule { }
