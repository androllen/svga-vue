module.exports = {
  pluginOptions: {
    electronBuilder: {
      // List native deps here if they don't work
      nodeIntegration: true,
      // If you are using Yarn Workspaces, you may have multiple node_modules folders
      // List them all here so that VCP Electron Builder can find them
      nodeModulesPath: ['./node_modules']
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    // host: 'localhost',
    // //auto open browser
    // open: true,
    // port: 8080,
    // //Cross-origin resource sharing
    // put your svga file to target(root) dir use hfs
    proxy: {
      '/': {
        target: 'http://192.168.0.45',
        changeOrigin: true
      }
    }
  }
}