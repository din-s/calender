import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButton, MatFabButton } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import moment from 'moment';
import { EventManagerService } from '../../../services/event-manager.service';
@Component({
  selector: 'app-month',
  standalone: true,
  imports: [DatePipe, MatCard, CommonModule, MatButton, MatFabButton, MatIconModule, MatIcon],
  templateUrl: './month.component.html',
  styleUrl: './month.component.scss'
})
export class MonthComponent implements OnInit {
  public prevDates: Date[] = [];
  public currDates: Date[] = [];
  public nextDates: Date[] = [];
  public days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat']
  yearMonthFormat: string = 'yyyy-MM'
  public selectedMonth: number = new Date().getMonth();
  public selectedYear: number = new Date().getFullYear();
  public selectedDate: number = new Date().getDate();

  constructor(private eventService: EventManagerService) {}

  ngOnInit(): void {
    const now = new Date()
    this.getDays(now.getMonth(), now.getFullYear());
  }

  public getDays(month: number, year: number): void {
    this.reset();
    const paddedMonth = `${month+1}`.padStart(2, '0')
    const monthMoment = moment(`${year}-${paddedMonth}-01`, this.yearMonthFormat+'-dd')
    const daysInMonth = monthMoment.daysInMonth();
    const monthStart =  monthMoment.startOf('month');
    const startDay = monthStart.get('day');
    if(startDay) {
      for(let i = startDay; i > 0; i--){
        this.prevDates.push(moment(monthStart).subtract(i, 'day').toDate())
      }
    }
    if(month !== this.selectedMonth || year !== this.selectedYear) {
      this.selectedMonth = Number(paddedMonth);
      this.selectedYear = Number(year);
    }
    this.currDates.push(monthMoment.toDate())
    for(let i = 1; i < daysInMonth; i++) {
      this.currDates.push(monthMoment.add(1, 'day').toDate())
    }
    if((this.prevDates.length + this.currDates.length) !== 35) {
      let diff = 35 - this.prevDates.length - this.currDates.length
      for(let i = 1; i <=diff; i++) {
        this.nextDates.push(moment(this.currDates[this.currDates.length-1]).add(i, 'day').toDate())
      }
    }
  }

  public navigateMonth(direction: number):void {
    let month;
    if(direction > 0) {
      month = moment(this.currDates[0]).add(1, 'month');
    } else {
      month = moment(this.currDates[0]).subtract(1, 'month');
    }
    this.getDays(month.get('month'), month.get('year'))
  }

  public triggerEvent(event: any, date: Date, direction?: number) {
    if(direction) {
      this.navigateMonth(direction);
    }
    this.selectedDate = date.getDate();
    this.eventService.createEvent()
  }
  private reset():void {
    this.currDates = [];
    this.prevDates = [];
    this.nextDates = [];
  }

}
