<template>
  <div class="schedule">
    <div>

    </div>
  </div>
</template>

<script>
import './schedule.scss'

export default {
  name: 'Schedule',

  components: {
  },

  created: function(){
    this.day = {
      date: new Date(),
    }
    this.day.date.setHours(0,0,0,0);
    this.STEP_MINUTES = this.MINUTES_IN_A_DAY/this.STEP_DAY;
  },

  data: function(){
    return {
      steps: Array,
      STEP_DAY: 48,
      MINUTES_IN_A_DAY: 1440,
      day: Object,
      STEP_MINUTES: Number,
    }
  },
  methods: {

    resetDay() {
      this.selectedDay.selected = false;
    },

  }
}
</script>
