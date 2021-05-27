// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: "@import '~@/assets/themes/_variables.scss';",
      },
    },
  },
};
