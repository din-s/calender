import { Injectable } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { EventPopupComponent } from '../components/event-popup/event-popup.component';
@Injectable({
  providedIn: 'root',
})
export class EventManagerService {

  constructor(private dialog: MatDialog) { }

  public createEvent() {
    const dialogRef: MatDialogRef<EventPopupComponent> = this.dialog.open(EventPopupComponent)
    dialogRef.afterClosed().subscribe((res) => {
      console.log('closed', res)
    })
  }
}
