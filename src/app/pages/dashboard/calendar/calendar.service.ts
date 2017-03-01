import {Injectable} from '@angular/core';
import {BaThemeConfigProvider} from '../../../theme';

@Injectable()
export class CalendarService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {

    let dashboardColors = this._baConfig.get().colors.dashboard;
    return {
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2016-05-08',
      selectable: true,
      selectHelper: true,
      editable: true,
      eventLimit: true,
      events: [
        {
          title: 'CIMA Lab',
          start: '2016-05-05T07:00:00',
          color: dashboardColors.silverTree
        },
        {
          title: 'Classroom Lecture',
          start: '2016-05-09',
          end: '2016-05-12',
          color: dashboardColors.blueStone
        },
        {
          title: 'Exam',
          start: '2016-05-13T20:00:00',
          color: dashboardColors.surfieGreen
        },
        {
          title: 'Online Study Session',
          start: '2016-06-01T07:00:00',
          color: dashboardColors.gossip
        }
      ]
    };
  }
}
