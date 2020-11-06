<template>
  <div>
    <button @click="playerStart">开始播放</button>
    <button @click="playerPause">暂停</button>
    <button @click="playerStop">停止</button>
    <button @click="playerClear">清空画布</button>

    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import { Downloader, Parser, Player } from 'svga.lite';
export default {
  data() {
    return {
      player: null,
    };
  },
  methods: {
    playerStart() {
      this.player.start();
    },
    playerPause() {
      this.player.pause();
    },
    playerStop() {
      this.player.stop();
    },
    playerClear() {
      this.player.clear();
    },
    async playerSvga() {
      const svgaFile = 'heart.svga';
      const downloader = new Downloader();
      const parser = new Parser();
      this.player = new Player('#canvas');
      const fileData = await downloader.get(svgaFile);
      const svgaData = await parser.do(fileData);
      this.player.set({ loop: 0 });
      await this.player.mount(svgaData);
    },
  },
  mounted() {
    this.playerSvga();
  },
};
</script>

<style scoped>
</style>