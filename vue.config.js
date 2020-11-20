module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/utils/styles/_main.scss";`
      }
    }
  }
}
