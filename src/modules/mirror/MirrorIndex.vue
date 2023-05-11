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
      video.addEventListener('canplay', (ev) => {
        if (!streaming) {
          height = video.videoHeight / video.videoWidth * width;

          video.setAttribute('width', width);
          video.setAttribute('height', height);
          canvas.setAttribute('width', width);
          canvas.setAttribute('height', height);
          streaming = true;
        }
      }, false);
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