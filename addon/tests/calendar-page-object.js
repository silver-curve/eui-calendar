import { HTML5_DATETIME_FORMAT } from 'eui-calendar/components/eui-day';

export default class CalendarPageObject {
  constructor(env) {
    this.env = env;
    this.$ = this.env.$;
  }

  calendar() {
    return this.$('.eui-day').map(trimText).toArray();
  }

  selectDate(date) {
    let datetime = date.format(HTML5_DATETIME_FORMAT);
    this.$(`.eui-day[data-datetime="${datetime}"]`).click();
  }

  isSelected(date) {
    let datetime = date.format(HTML5_DATETIME_FORMAT);
    return this.$(`.eui-day[data-datetime="${datetime}"]`).hasClass('eui-day--selected');
  }
}

function trimText() {
  return Ember.$(this).text().trim();
}
