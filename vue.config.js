module.exports = {
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Présentation Jérémy Riverain";
      return args;
    });
  }
};
