<template>
  <div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import { Downloader, Parser, Player } from 'svga.lite';
export default {
  methods: {
    async cancelSvga() {
      const SVGAFileURL = './svga/3.svga';
      const downloader = new Downloader();
      downloader
        .get(SVGAFileURL)
        .then((fileData) => {
          console.log(fileData);
        })
        .catch((error) => {
          console.log('catch', error);
        });

      setTimeout(() => {
        console.log('cancel');
        downloader.cancel(); // 或者 downloader.destroy()
      }, 2000);
    },
  },
  mounted() {
    this.cancelSvga();
  },
};
</script>

<style scoped>
</style>