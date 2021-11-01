module.exports = {
  publicPath:"./",
  outputDir:"dist",
  indexPath:"index.html",
  pages: {
    index: {
      //入口
      entry: "src/main.js",
    },
  },
  lintOnSave: false, //关闭语法检查
  devServer: {
    proxy: {
      "/dev": {
        target: "http://www.devilc.cn:3000/",
        pathRewrite: { "^/dev": "" },
        ws: true,
        changeOrigin: true,
      },
      "/cm": {
        target: "http://121.40.159.226:3000",
        pathRewrite: { "^/cm": "" },
        ws: true,
        changeOrigin: true,
      },
      "/cmapi": {
        target: "http://localhost:3000",
        pathRewrite: { "^/cmapi": "" },
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
