import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';
import moment from 'moment';
@Component({
  selector: 'app-month',
  standalone: true,
  imports: [DatePipe, MatCard, CommonModule],
  templateUrl: './month.component.html',
  styleUrl: './month.component.scss'
})
export class MonthComponent implements OnInit {
  @Input() activeDate: string = new Date().getMonth().toString();
  public dates: Date[] = [];
  public days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat']
  yearMonthFormat: string = 'yyyy-mm'

  ngOnInit(): void {
    const now = new Date()
    this.getDays(now.getMonth(), now.getFullYear());
  }

  public getDays(month: number, year: number) {
    const daysInMonth = moment(`${year}-${month+1}`, this.yearMonthFormat).daysInMonth();
    for(let i = 1; i <= daysInMonth; i++) {
      this.dates.push(new Date(new Date().setDate(i)))
    }
  }

}
