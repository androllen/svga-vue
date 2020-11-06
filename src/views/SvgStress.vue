<template>
  <div class="home">
    <canvas :id="post.id" v-for="post in posts" :key="post.id" :svgfile="post.file" />
  </div>
</template>

<script>
// @ is an alias to /src
import { Downloader, Parser, Player } from 'svga.lite';

export default {
  name: 'Home',
  props: {
    svgfile: String,
  },
  data() {
    return {
      posts: [
        { id: 'canvas_1', file: '/svga/1.svga' },
        { id: 'canvas_2', file: '/svga/2.svga' },
        { id: 'canvas_3', file: '/svga/3.svga' },
        { id: 'canvas_4', file: '/svga/4.svga' },
      ],
      downloader: null,
      parser: null,
      player: null,
      svgitem: this.svgfile,
    };
  },
  methods: {
    initSvg() {
      this.posts.forEach((element) => {
        const canvas = document.getElementById(element.id);
        this.showSvg(canvas, element);
      });
    },
    async showSvg(canvas, element) {
      console.log(element.id);
      const downloader = new Downloader();
      const parser = new Parser();
      const player = new Player(canvas);
      player.set({ loop: 1, cacheFrames: true, intersectionObserverRender: true });
      const fileData = await downloader.get(element.file);
      const svgaData = await parser.do(fileData);
      await player.mount(svgaData);
      player.start();
      downloader.destroy()
      parser.destroy()
    },
  },
  mounted() {
    this.initSvg();
  },
};
</script>

<style scoped>
canvas {
  width: 200px;
  height: 200px;
  background-color: green;
}
</style>