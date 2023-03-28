<template>
  <div>
    <h1>css</h1>

    <hr>
    <div>
      > 文字水平居中: <code>text-align: center;</code>
      <div class="box" style="text-align: center;display: inline-block;width: 120px;">heloooo</div>
      <div class="box" style="text-align: center;display: inline-block;width: 120px;"><span>helo in span</span></div>
      <br>

      > 容器水平居中: <code>margin: 0 auto;</code>
        <div class="box" style="width: 120px;margin: 0 auto;">heloooo</div>
      > 容器水平居中: <code>display: flex;justify-content: center;</code>
        <div class="box" style="width: 120px;display: flex;justify-content: center;">
          <div class="box">1</div>
          <div class="box">2</div>
        </div>
      > 容器水平居中: <code>display: inline-block;vertical-align: middle;</code>
      <div class="box" style="width: 120px;display: inline-block;vertical-align: middle;">heloooo</div>
      <br>


      > 文字垂直居中: <code>line-height: 100%;</code>
      <div class="box" style="line-height: 100px;height: 100%;">这个div100px</div>
      <div class="box" style="line-height: 100px;height: 100px;"><span>span: 行高与容器高设为相等</span></div>
      <br>
      > 容器垂直居中: <code>display: flex;align-items: center;</code>
      <div class="box" style="display: flex;align-items: center;height: 100px;"><div class="box">heloindiv</div></div>
      > 容器垂直居中: <code>display: table-cell;vertical-align: middle;</code>
      <div class="box" style="display: table-cell;vertical-align: middle;height: 100px;">heloindiv</div>
      <br>



      > 文字水平垂直居中: <code>display: flex;justify-content: center;align-items: center;</code>
      <div class="box" style="display: flex;justify-content: center;align-items: center;height: 100px;"><div class="box">heloindiv</div></div>
      > 文字水平垂直居中: <code>display: table-cell;vertical-align: middle;text-align: center;</code>
      <div class="box" style="display: table-cell;vertical-align: middle;text-align: center;height: 100px;">heloindiv</div>
      <br>
      > 容器垂直居中: <code>display: table-cell;vertical-align: middle;</code>
      <div class="box" style="display: table-cell;vertical-align: middle;height: 100px;">heloindiv</div>

      <div id="big">
        big
          <div id="small">
          small
          </div>
      </div>
    </div>

    <hr>
    > css三角形
    <div class="triangle"></div>

    <hr>
    > css提示框
    <a class="tooltip" href="#">链接文字 <span>提示文字</span></a>


  </div>
</template>

<script>
export default {

}
</script>

<style>
div.box {
  border: 1px dashed ;
}

div#big{
position:relative;
height:100px;
border: 1px solid red;
}

div#small {
position: absolute;
top: 50%;
height: 60px;
/* 小容器高度 */
margin-top: -30px; 
border: 1px solid blue;
}

.triangle {
  border-color: transparent transparent green transparent;
  border-style: solid;
  border-width: 0px 30px 30px 30px;
  height: 0px;
  width: 0px;
}

a.tooltip {position: relative}
a.tooltip span {display:none; padding:5px; width:200px;}
a:hover {background:#fff;} /*background-color is a must for IE6*/
a.tooltip:hover span{display:inline; position:absolute;}
</style>