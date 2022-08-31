<template>
  <div style="height: 99vh;">
    <div
      class="infoarea" 
      v-if="isCopyed">
      &nbsp;copyed!&nbsp;
    </div>
    <div style="display: flex;align-items:center;">
      <h1>色色语气转换👅</h1>
      <v-spacer></v-spacer>
      <!-- <v-text-field width="100px" disabled="true"></v-text-field> -->
      <v-btn @click="randomInput">随机🎲</v-btn>
      <v-btn @click="i += ' ';i.slice(0, -1);" color="pink">瑟瑟❤</v-btn>
    </div>
    <div style="height: calc(92%);">
      <div class="inputarea mb-2" >
        <textarea
          class="area1"
          style="display: true;"
          :style="this.$vuetify.theme.dark ?'color: rgba(252, 252, 252, 0.999);' : ''" 
          placeholder="用〇〇在这里输入💗"
          type="text"
          autofocus
          v-model="i"
        >
        </textarea>
      </div>
      <div class="inputarea">
        <div
          class="area2"
          ref="myinput"
          :style="this.$vuetify.theme.dark ?'color: rgba(252, 252, 252, 0.888);' : ''" 
          @click="copy"
        >{{ o ? o : '这里...这里要...要出来了!'}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import hitokotoService from '../../services/hitokoto'

export default {
  data() {
    return {
      i: '',
      o: "",
      isCopyed: false,
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
        '.',
        ';',
        '，',
        '。',
        '；',
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
        if (word === '!' || word ===  '！') {
          return '❤'
        }
        if (Math.random() > 0.5){
          return word[0] + "……" + word
        }else if(Math.random() < 0.5){
          return '〇'.repeat(word.length)
        }
        return `……${word}`
      }).join('')
    },
    async randomInput(){
      this.i = '';
      const data = await hitokotoService.get()
      .then((result) => {
        const {hitokoto, from, from_who, creator} = result
        this.i = `${hitokoto} 
        -- ${from|| ''} ${from_who|| ''} by ${creator|| ''}`
      })
    },
  },
  watch: {
    i: {
      handler(){
        this.o = this.sese(this.i);
      },
      immediate: true,
    },
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