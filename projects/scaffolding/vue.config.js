const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const { VUE_APP_PORT, NODE_ENV } = process.env;

module.exports = defineConfig({
  assetsDir: "assets",
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", path.resolve(__dirname, "src/"))
      .set("@views", path.resolve(__dirname, "src/views/"))
      .set("@components", path.resolve(__dirname, "src/components/"))
      .set("@constants", path.resolve(__dirname, "src/constants/"))
      .set("@config", path.resolve(__dirname, "src/config/"))
      .set("@utils", path.resolve(__dirname, "src/utils/"))
      .set("@assets", path.resolve(__dirname, "src/assets/"));
    config.module.rule("images").set("parser", {
      dataUrlCondition: {
        maxSize: 4 * 1024,
      },
    });
  },
  configureWebpack: (config) => {
    if (NODE_ENV === "production") {
      config.mode = "production";
      // config.output.filename = 'js/[name].[hash].js'
      // config.output.chunkFilename = 'js/[name].[hash].js'
    } else {
      config.mode = "development";
    }
  },
  css: {
    extract: true,
    sourceMap: true,
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@assets/scss/override.scss";
        `,
      },
    },
  },
  devServer: {
    port: VUE_APP_PORT,
    hot: true,
  },
});
