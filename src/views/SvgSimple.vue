<template>
  <div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import { Downloader, Parser, Player } from 'svga.lite';
export default {
  methods: {
    playSvg() {
      var downloader = new Downloader();
      var parser = new Parser();
      var player = new Player('#canvas');

      downloader.get('./svga/4.svga').then(function (fileData) {
        parser.do(fileData).then(function (svgaData) {
          player.mount(svgaData).then(function () {
            player.start();
          });
        });
      });
    },
  },
  mounted() {
    this.playSvg();
  },
};
</script>


<style scoped>
#canvas {
  background-color: black;
  transform: scale(0.5);
  transform-origin: 0 0;
}
</style>