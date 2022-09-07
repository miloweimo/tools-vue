<template>
  <div style="height: 99vh;">
    <div
      class="infoarea" 
      v-if="isCopyed">
      &nbsp;copyed!&nbsp;
    </div>
    <div style="display: flex;align-items:center;">
      <h3>语气转换👅</h3>
      <v-spacer></v-spacer>
      <v-btn @click="randomInput">随机🎲</v-btn>
      <v-btn @click="handleTransform" color="pink">转换❤</v-btn>
    </div>
    <div style="height: calc(92%);">
      <div class="inputarea mb-2" >
        <textarea
          class="area1"
          style="display: true;"
          :style="isDark ?'color: rgba(252, 252, 252, 0.999);' : ''" 
          placeholder="用〇〇在这里输入"
          type="text"
          autofocus
          v-model="input"
        >
        </textarea>
      </div>
      <div class="inputarea">
        <div
          class="area2"
          ref="myinput"
          :style="isDark ?'color: rgba(252, 252, 252, 0.888);' : ''" 
          @click="copy"
        >{{ o ? o : '点击转换❤这里要...要出来了!'}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import hitokotoService from '../../services/hitokoto'

export default {
  data() {
    return {
      show1: '',
      input: '',
      o: "",
      isCopyed: false,
      isDark: false,
    }
  },
  methods: {
    copy(){
      this.$refs.myinput.focus();
      document.execCommand('copy');
      navigator.clipboard.writeText(this.o);
      this.isCopyed= true;
      setTimeout(() => {
      this.isCopyed= false;
      }, 2500);
    },
    sese(string, 淫乱度 = 0.5){
      const delimiterList = [
        ',',
        ';',
        '，',
        '；',
      ];
      const delimiterList2 = [
        '。',
        '.',
        '！',
        '!',
      ];
      const segmenterCn = new Intl.Segmenter('cn', { granularity: 'word' });
      const segments = segmenterCn.segment(string);
      const wordsArray =  Array.from(segments).map((item) => {
        return item.segment
      });
      return wordsArray.map((word) => {
        if (Math.random() > 淫乱度) return word 
        if (delimiterList.includes(word)) {
          return '……'
        }
        if (delimiterList2.includes(word)) {
          return '❤'
        }
        if (Math.random() > 0.5){
          return word[0] + "……" + word
        }else if(Math.random() < 0.5){
          return '〇'.repeat(word.trim().length)
        }else if(Math.random() < 0.5){
          return `……${word}`
        }
        return word
      }).join('')
    },
    async randomInput(){
      this.input = '';
      this.o = '';
      await hitokotoService.get()
        .then((result) => {
          const {hitokoto, from, from_who, creator} = result
          this.input = `${hitokoto}`
          this.o = this.sese(this.input);
          this.$nextTick(() => 
            this.input = this.input + `\n${from|| ''} ${from_who|| ''}\n${creator|| ''}`
          )
        })
    },
    handleTransform(){
      this.input += ' ';
      this.$nextTick(() => 
        this.input = this.input.slice(0, -1)
      )
      this.o = this.sese(this.input);
    },
    initDarkMode() {
      let media = window.matchMedia('(prefers-color-scheme: dark)');

      if (media.matches) {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }

      let callback = (e) => {
        let prefersDarkMode = e.matches;
        if (prefersDarkMode) {
          this.$vuetify.theme.dark = true;
        } else {
          this.$vuetify.theme.dark = false;
        }
      };

      if (typeof media.addEventListener === 'function') {
        media.addEventListener('change', callback);
      } else if (typeof media.addListener === 'function') {
        media.addListener(callback);
      }
    },
  },
  created(){
    this.initDarkMode()
    this.isDark = this.$vuetify.theme.dark;
  },
}
</script>

<style scoped>
.inputarea {
  margin: auto;
  border: 3px solid rgba(249, 62, 171, 0.229);
  height: 50%;
  width: 99%;
}

.infoarea {
  border-radius: 10px;
  border: 1px solid;
  background: linear-gradient(to bottom right, rgba(0, 0, 255, 0.65), 20%, rgba(255, 192, 203, 0.65));
  position: absolute;
  width: fit-content;
  height: fit-content;
  top:0;
  right:0;
  bottom:0;
  left:0;
  margin:auto;
}

.area1 {
  background-color: rgba(71, 108, 255, 0.151);
  width: 100%;
  height: 100%;
  font-size: x-large;
}
.area2 {
  background-color: rgba(255, 71, 178, 0.1);
  width: 100%;
  height: 100%;
  font-size: x-large;
  overflow: scroll;
}
</style>