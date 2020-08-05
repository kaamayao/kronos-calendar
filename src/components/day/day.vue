<template>
  <button class="day" 
    :class="getDayClass()"
    v-on:click="selectDay"
    >
    {{this.day.date?this.day.date.date():''}}
  </button>
</template>

<script>
import './day.scss'

export default {
  name: 'Day',

  components: {
  },

  methods:{
    selectDay(){
      this.$emit('selectDay',this.day.date);
    },

    getDayClass(){
      let classDay = '';
      if(!this.day.currentMonth){
        classDay = 'day--non-current';
      }
      if(this.selectedDay.date.isSame(this.day.date)){
        classDay = 'day--selected';
      }
      return classDay;
    },
  },
  
  props: ['day','selectedDay']
}
</script>
