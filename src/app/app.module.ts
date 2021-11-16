import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatIconModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';

import { HelloComponent } from "./hello.component";
import { EditComponent } from "./edit.component";

import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    EditComponent,

    
  ],
  entryComponents: [HelloComponent,EditComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatGridListModule,
    MatTableModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
 
  providers: [],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
