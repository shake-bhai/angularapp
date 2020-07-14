import { Component, OnInit} from '@angular/core';
import { BookingFormComponent } from './bookingform/booking-form/booking-form.component'
import { MatDialog } from '@angular/material/dialog';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isPopupOpened = true;

  constructor(private dialog?: MatDialog) { }

  ngOnInit() {
    
  }

  addContact() {
    this.isPopupOpened = true;
    const dialogRef = this.dialog.open(BookingFormComponent, {
      data: {}
    });


}
}
