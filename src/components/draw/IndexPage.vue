<template>
  <canvas
    id="cvs"
    :height="height"
    :width="width"
  />
</template>

<script>
export default {
  data() {
    return {
      isDrawing:false,
      height: window.innerHeight,
      width:window.innerWidth,
    }
  },
  created(){
    document.title = 'draw'
    let favicon = document.querySelector("link[rel*='icon']") || document.createElement('link');
    favicon.type = 'image/x-icon';
    favicon.rel = 'shortcut icon';
    favicon.href = "data:image/png;base64,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";
  },
  mounted() {
    const cvs = document.getElementById("cvs")
    console.log(cvs);
    if(cvs.getContext){
      const ctx = cvs.getContext('2d');
      cvs.addEventListener('mousedown', e => {
        this.isDrawing =true;
        ctx.moveTo(e.pageX,e.pageY)
      })
      cvs.addEventListener('mousemove', e => {
        if(this.isDrawing){
          ctx.lineTo(e.pageX,e.pageY)
          ctx.stroke()
        }
      })
      cvs.addEventListener('mouseup', e => {
        this.isDrawing =false;
      })
      console.log(cvs, 'added');
    }
  },
  beforeDestroy(){
    const favicon = document.querySelector("link[rel*='icon']") || document.createElement('link');
    favicon.href = "/favicon.ico"
  },
}
</script>

<style>

</style>