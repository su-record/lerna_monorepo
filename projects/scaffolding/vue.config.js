const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const { VUE_APP_PORT, NODE_ENV, VUE_APP_NAME } = process.env;

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: path.resolve(__dirname, `../../../${VUE_APP_NAME}_prod/dist`),
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
      .set("@styles", path.resolve(__dirname, "src/styles/"));
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
          @import "@styles/override.scss";
        `,
      },
    },
  },
  devServer: {
    // port: VUE_APP_PORT,
    hot: true,
  },
});
