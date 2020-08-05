import dayjs from 'dayjs';

class CalendarService {
  getDay(date){
    return {
      date,
      currentMonth: date.month() === this.currentMonth,
      events: [this.createEvent(1),this.createEvent(2),this.createEvent(3)]
    };
  }

  createEvent(index){
    return {
      title: `Section ${index}: The Two Factors of a Commodity`,
      start: dayjs().add(index,'hour'),
      end: dayjs().add(index+1,'hour'),
      description: `The  wealth  of  those  societies  in  which  the
      capitalist  mode  of  production  prevails,  presents  itself  as  “an
      immense  accumulation  of  commodities,”1  its  unit  being  a  single
      commodity.  Our  investigation must therefore begin with the analysis
      of a commodity`
    }
  }
}

export default new CalendarService();
