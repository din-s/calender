import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CalenderView } from './enums/calender-view';
import { MatSelect, MatSelectModule } from '@angular/material/select'
import { UpperCasePipe, NgFor, CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, NgModel } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { v4 as uuid} from 'uuid';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSelectModule, MatSelect, UpperCasePipe, FormsModule, 
    MatButtonModule, RouterLink, MatDivider, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calender';
  calenderView: CalenderView = CalenderView.MONTH
  calenderViews = Object.values(CalenderView);
  today: Date = new Date();
}
