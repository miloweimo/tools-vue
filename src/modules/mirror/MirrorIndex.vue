<template>
  <div>
    <div class="camera">
      <video id="video">视频流目前不可用。</video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MirrorIndex',
  data() {
    return {
      video : null,
    };
  },
  mounted() {
      this.video = document.getElementById('video');
      navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(`An error occurred: ${err}`);
      });
    }
}
</script>

<style lang="scss" scoped>
#video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: rotateY(180deg);
}
</style>