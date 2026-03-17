module.exports = function(eleventyConfig) {
  // srcフォルダをそのまま公開用フォルダ（_site）にコピーしてね！という命令
  eleventyConfig.addPassthroughCopy("src");
};