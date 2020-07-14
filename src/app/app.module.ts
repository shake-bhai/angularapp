import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import {DataApiService} from './data-api.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { BookingFormComponent } from './bookingform/booking-form/booking-form.component'
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import { PhoneMaskDirective } from './bookingform/booking-form/phone-mask.derictive';
import { CnicMaskDirective } from './bookingform/booking-form/cnic-mask.derictive';
import { NCnicMaskDirective } from './bookingform/booking-form/nCnic-mask.derictive';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    BookingFormComponent,
    PhoneMaskDirective,
    CnicMaskDirective,
    NCnicMaskDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot()
  ],
  exports:[
    PhoneMaskDirective,
    CnicMaskDirective,
    NCnicMaskDirective
  ],

  providers:[ DataApiService,
    {
      provide: MatDialogRef,
      useValue: {}
    },
    {provide:MAT_DIALOG_DATA,
      useValue:{}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
