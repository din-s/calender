export interface CalenderEvent {
    id: string;
    title: string;
    start: Date;
    end: Date;
    allDay?: boolean;
}
