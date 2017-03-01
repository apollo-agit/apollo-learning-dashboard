import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'Curriculum ',
        stats: '15',
        icon: 'person',
      }, {
        color: pieColor,
        description: 'Terms Complete',
        stats: '3',
        icon: 'money',
      }, {
        color: pieColor,
        description: 'Course Load',
        stats: '15 Hrs',
        icon: 'face',
      }, {
        color: pieColor,
        description: 'Qualifications',
        stats: '2',
        icon: 'refresh',
      }
    ];
  }
}
