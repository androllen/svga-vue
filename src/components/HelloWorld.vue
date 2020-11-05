<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <canvas id="canvas" style="width: 200px; height: 200px;"/> -->
    <canvas id="canvas" />
  </div>
</template>

<script>
import { Downloader, Parser, Player } from 'svga.lite';
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      downloader: null,
      parser: null,
      player: null,
    };
  },
  methods: {
    initSvg() {
      this.downloader = new Downloader();
      this.parser = new Parser();
      this.player = new Player('#canvas');
    },
    async showSvg() {
      const fileData = await this.downloader.get('heart.svga');
      const svgaData = await this.parser.do(fileData);
      this.player.set({ loop: 3 });
      await this.player.mount(svgaData);
      this.player
        // 开始动画事件回调
        .$on('start', () => console.log('event start'))
        // 暂停动画事件回调
        .$on('pause', () => console.log('event pause'))
        // 停止动画事件回调
        .$on('stop', () => console.log('event stop'))
        // 动画结束事件回调
        .$on('end', () => {
          console.log('event end');
        })
        // 清空动画事件回调
        .$on('clear', () => console.log('event clear'))
        // 动画播放中事件回调
        .$on('process', () => console.log('event process', this.player.progress));
      // 开始播放动画
      this.player.start();
    },
  },
  mounted() {
    this.initSvg();
    this.showSvg();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
