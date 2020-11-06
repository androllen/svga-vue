<template>
  <div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import { Downloader, Parser, Player } from 'svga.lite';

export default {
  methods: {
    async playSvga() {
      let db = void 0;
      let data = void 0;
      const svgaFile = '/svga/2.svga';

      try {
        db = new SVGADB();
      } catch (error) {
        console.error(error);
      }

      console.time(svgaFile);

      if (db) {
        data = await db.find(svgaFile);
      }

      if (!data) {
        const downloader = new Downloader();
        const fileData = await downloader.get(svgaFile);
        const parser = new Parser();
        data = await parser.do(fileData);

        // 存入本地数据库
        db && (await db.insert(svgaFile, data));
      }

      console.timeEnd(svgaFile);

      const player = new Player('#canvas');
      await player.mount(data);

      player.start();
    },
  },
  mounted() {
    this.playSvga();
  },
};
</script>

<style scoped>
canvas {
  width: 200px;
  height: 200px;
}
</style>