<template>
  <div id="app">

    <div>
      <b>📅<i>dayjs demo</i>日期计算</b><br>
      iso date: {{isodate}} 
      <hr>

      <b>通过日期获得周</b><br>
      date: <input type="datetime-local" v-model="date" step="1">
      当前第{{d(date).isoWeek()}}周 这年共{{d(date).endOf('year').isoWeek()}}周 {{typeof(d().isoWeek())}}
      <br>
      当前周周一日期 {{d(date).isoWeekday(1).format('YYYY年MM月DD日')}} 当前周周日日期 {{d(date).isoWeekday(7).format('YYYYMMMDD')}}
      <br>
      这个月第一天是 {{d(date).startOf('month').format('YYYY年MM月DD日')}}，第{{d(date).startOf('month').week()}}周。
      <br>
      <hr>

      <b>通过周数获得日期</b> <input type="number" v-model="year">年 第<input type="number" v-model="weeknumber">周的<br>
      上周日是{{d(`${String(year)}-01-28`, 'YYYY-MM-DD').isoWeekday(7).isoWeek(weeknumber - 1).format('YYYY-MM-DD')}}
      周一是{{d(`${String(year)}-01-28`, 'YYYY-MM-DD').isoWeekday(1).isoWeek(weeknumber).format('YYYY-MM-DD')}}<br>
      周六是{{d(`${String(year)}-01-28`, 'YYYY-MM-DD').isoWeekday(-1).isoWeek(weeknumber).format('YYYY-MM-DD')}}
      周日是{{d(`${String(year)}-01-28`, 'YYYY-MM-DD').isoWeekday(7).isoWeek(weeknumber).format('YYYY-MM-DD')}}
      <br>
      {{typeof(d().isoWeekday(1).format('YYYYMMDD'))}} <a href="https://day.js.org/docs/zh-CN/plugin/iso-week">isoWeek文档</a>
      <hr>

      <b>获取一个时间的开始</b>
      <br>
      今年一月1日上午00:00 {{d().startOf('year').format('YYYYMMDD')}}
      <br>
      {{typeof(d().startOf('year')).format('YYYYMMDD')}} <a href="https://day.js.org/docs/zh-CN/manipulate/start-of">Start of Time文档</a>
      <hr>

      <hr>
      <b>参考</b>
      <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601</a>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
const isoWeek = require('dayjs/plugin/isoWeek')
const weekOfYear = require('dayjs/plugin/weekOfYear')
dayjs.extend(isoWeek)
dayjs.extend(weekOfYear)

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      d: dayjs,
      isodate: '',
      date: '2077-01-01',
      datenumber: 0,
      weeknumber: 40,
      year: -1,
    }
  },
  mounted() {
    this.datenumber = Number(this.d().format('YYYYMMDD'));
    // dayjs.tz.setDefault("Asia/Shanghai");
    this.date = this.d().format().substring(0, 19);
    this.isodate = this.d().format();
    this.weeknumber = this.d(this.date).isoWeek();
    this.year = Number(this.d().format('YYYY'));
    setInterval(() => {
      this.isodate = this.d().format();
    },1000)
  },  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: justify;
  color: #2c3e50;
  margin-top: 10px;
}

</style>
