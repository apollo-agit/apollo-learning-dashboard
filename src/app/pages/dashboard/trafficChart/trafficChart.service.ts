import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class TrafficChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }


  getData() {
    let dashboardColors = this._baConfig.get().colors.dashboard;
    return [
      {
        value: 17,
        color: dashboardColors.white,
        highlight: colorHelper.shade(dashboardColors.white, 15),
        label: 'Papers',
        percentage: 17,
        order: 1,
      }, {
        value: 22,
        color: dashboardColors.gossip,
        highlight: colorHelper.shade(dashboardColors.gossip, 15),
        label: 'Lab Seatings',
        percentage: 22,
        order: 4,
      }, {
        value: 12,
        color: dashboardColors.silverTree,
        highlight: colorHelper.shade(dashboardColors.silverTree, 15),
        label: 'Exams',
        percentage: 12,
        order: 3,
      }, {
        value: 4,
        color: dashboardColors.surfieGreen,
        highlight: colorHelper.shade(dashboardColors.surfieGreen, 15),
        label: 'Forums',
        percentage: 4,
        order: 2,
      }, {
        value: 17,
        color: dashboardColors.blueStone,
        highlight: colorHelper.shade(dashboardColors.blueStone, 15),
        label: 'Assignments',
        percentage: 17,
        order: 0,
      },
    ];
  }
}
