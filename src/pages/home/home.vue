<template>
  <Article class="home">
    <div class="home__sidebar">
      <Calendar @selectDay="selectDay" :selectedDay="selectedDay"></Calendar>
    </div>
    <div class="home__main">
      <Schedule></Schedule>
    </div>
  </Article>
</template>

<script>
import './home.scss'
import Calendar from '../../components/calendar/calendar.vue'
import Schedule from '../../components/schedule/schedule.vue'

export default {
  name: 'Home',
  components: {
    Calendar, 
    Schedule,
  },
  methods:{
    selectDay(date) {
      this.selectedDay = this.$calendarService.getDay(date);
    },
  },
  data:function(){
    return{
      selectedDay: Object,
    }
  }
}
</script>

