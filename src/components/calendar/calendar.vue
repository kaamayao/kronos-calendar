<template>
  <article class="calendar" v-if="this.selectedDay.date!==undefined">
    <div class="calendar__day-selected">
      <button class="calendar__day-btn" v-on:click="changeMonth('prev')" >
      &lt;
      </button>
        <div class="calendar__day-wrap">
          <p class="calendar__day">
            {{this.selectedDay.date.date()}}
          </p> 
        <div class="calendar__fulldate">
          <p class="calendar__day-name">
            {{this.DAYS[this.selectedDay.date.day()].fullname}}
          </p> 
          <p class="calendar__year-month">
            {{this.MONTHS[this.selectedDay.date.month()]}}
            {{this.selectedDay.date.year()}}
          </p>
        </div>
        </div>
      <button class="calendar__day-btn" v-on:click="changeMonth('next')">
      &gt;
      </button>
    </div>

    <div class="calendar__head">
      <div class="calendar__head-days-wrap">
        <div class="calendar__head-day"
             v-for="day in DAYS" 
             :key="day.name">
          {{day.name}}
        </div>
      </div>
    </div>

    <div class="calendar__month-days">
      <Day 
        v-for="monthday in monthdays" 
        :key="monthday.day"
        :day="monthday"
        :selectedDay="selectedDay"
        @selectDay="selectDay"
      > 
      </Day>
    </div>
  </article>
</template>

<script>
import './calendar.scss'
import Day from '../day/day.vue'

export default {
  name: 'Calendar',

  components: {
    Day
  },

  created: function (){
    const now = this.$date().hour(0).minute(0).second(0).millisecond(0); 
    this.setCalendar(now);
  },

  methods:{
    getFirstDayCalendar(){
      let date = this.$date(`${this.currentDate.year()}-${this.currentDate.month()+1}-01`);
      return date.subtract(date.day(),'day')  
    },

    createDay(index) {
      let date = this.getFirstDayCalendar().add(index,'d').hour(0); 
      return {
        date,
        currentMonth: date.month() === this.currentDate.month()
      }
    },

    selectDay(date) {
      this.$emit('selectDay',date);
    },

    populateMonthDays(){
      this.monthdays = this.createArray(this.SIZECALENDAR);
      this.monthdays = this.monthdays.map(this.createDay);
    },

    changeMonth(direction){
      let currentDate = this.$date(`${this.currentDate.year()}-${this.currentDate.month()+1}-01`);
      if(direction==='next'){
        currentDate = currentDate.add(1, 'month');
      } else {
        currentDate = currentDate.subtract(1, 'month');
      } 
      this.setCalendar(currentDate);
    },

    setCalendar(date){
      const now = date.hour(0); 
      this.currentDate = this.$date(`${now.year()}-${now.month()+1}-01`);
      this.populateMonthDays();
      this.selectDay(now);
    }

  },

  props: ['selectedDay'],

  data: function(){
    return{
      currentDate: Date,
      monthdays: [],
      SIZECALENDAR: 42,
      DAYS: [
        {fullname:"Domingo",name:"Dom"},
        {fullname:"Lunes",name:"Lun"},
        {fullname:"Martes",name:"Mar"},
        {fullname:"Miercoles",name:"Mie"},
        {fullname:"Jueves",name:"Jue"},
        {fullname:"Viernes",name:"Vie"},
        {fullname:"Sábado",name:"Sáb"},
      ],
      MONTHS: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
        "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    }
  }
}
</script>
