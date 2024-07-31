import { Routes } from '@angular/router';
import { MonthComponent } from './components/calender-view/month/month.component';
import { YearComponent } from './components/calender-view/year/year.component';
import { WeekComponent } from './components/calender-view/week/week.component';

export const routes: Routes = [
    {
        path:'',
        component: MonthComponent
    },
    {
        path: 'view/month',
        component: MonthComponent
    },
    {
        path: 'view/year',
        component: YearComponent
    },
    {
        path: 'view/week',
        component: WeekComponent
    },

];
