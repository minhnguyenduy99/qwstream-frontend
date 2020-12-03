module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/utils/styles/variables.scss";  
          @import "@/utils/styles/_main.scss";
        `
      }
    }
  }
}
