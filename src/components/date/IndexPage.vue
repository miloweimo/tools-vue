<template>
  <div id="app">

    <div>
      <h4>📅<i>dayjs demo</i>日期计算</h4>
      本地时间:<code>{{isodate}}</code>(isodate)
      <hr>

      <b>通过日期获得iso周</b>
      点击选择日期: <input type="datetime-local" v-model="date" step="1" style="color: red;">(date)<br>
      *ISO周从星期一开始，周日结束<br>
      *01 周的 ISO 8601 定义是公历年（即一月）的第一个星期四所在的一周<a href="https://en.wikipedia.org/wiki/ISO_week_date">wiki</a><br>
      <code>dayjs(date).endOf('year').isoWeek()</code>({{typeof(d().isoWeek())}})<br>
      <code>dayjs(date).isoWeek()</code>({{typeof(d().isoWeek())}})<br>
      这年共<code>{{d(date).endOf('year').isoWeek()}}</code>周，当前第<code>{{d(date).isoWeek()}}</code>周<br>
      <code>d(date).isoWeekday(1).format('YYYY年MM月DD日')</code>({{ typeof(d(date).isoWeekday(1).format('YYYY年MM月DD日')) }})<br>
      当前周一日期 <code>{{d(date).isoWeekday(1).format('YYYY年MM月DD日')}}</code><br>
      <code>d(date).isoWeekday(7).format('YYYYMMMDD')</code>({{ typeof(d(date).isoWeekday(7).format('YYYYMMMDD')) }})<br>
      当前周日日期 <code>{{d(date).isoWeekday(7).format('YYYYMMMDD')}}</code>
      <br>
      <code>d(date).startOf('month').format('YYYY年MM月DD日')</code>({{ typeof(d(date).startOf('month').format('YYYY年MM月DD日')) }})
      <br>
      <code>d(date).startOf('month').week()</code>({{ typeof(d(date).startOf('month').week()) }})
      <br>
      这个月第一天是 <code>{{d(date).startOf('month').format('YYYY年MM月DD日')}}</code>，第<code>{{d(date).startOf('month').week()}}</code>周。
      <br>
      <hr>
      
      <b>通过周数获得日期</b>
      点击选择周: <input type="number" v-model="year" style="color: red;">(year)年 第<input type="number" v-model="weeknumber" style="color: red;">(weeknumber)周的<br>
      <code>d(`${String(year)}-01-28`, 'YYYY-MM-DD').isoWeekday(7).isoWeek(weeknumber - 1).format('YYYY-MM-DD')</code>(string)<br>
      上周日是{{d(`${String(year)}-01-28`, 'YYYY-MM-DD').isoWeekday(7).isoWeek(weeknumber - 1).format('YYYY-MM-DD')}}
      这周一是{{d(`${String(year)}-01-28`, 'YYYY-MM-DD').isoWeekday(1).isoWeek(weeknumber).format('YYYY-MM-DD')}}<br>
      这周六是{{d(`${String(year)}-01-28`, 'YYYY-MM-DD').isoWeekday(-1).isoWeek(weeknumber).format('YYYY-MM-DD')}}
      这周日是{{d(`${String(year)}-01-28`, 'YYYY-MM-DD').isoWeekday(7).isoWeek(weeknumber).format('YYYY-MM-DD')}}
      <br>
      <a href="https://day.js.org/docs/zh-CN/plugin/iso-week">isoWeek文档</a>
      <hr>

      <b>获取一个时间的开始</b><br>
      <code>d().startOf('year')</code>{{ typeof(d().startOf('year')) }}<br>
      <code>d().startOf('year').format('YYYYMMDD')</code>{{ typeof(d().startOf('year')).format('YYYYMMDD') }}<br>
      今年一月1日上午00:00<code>{{d().startOf('year').format('YYYYMMDD')}}</code><br>
      <a href="https://day.js.org/docs/zh-CN/manipulate/start-of">Start of Time文档</a>
      <hr>

      <b>其他参考</b>
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
