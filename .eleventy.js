const pluginWebc = require('@11ty/eleventy-plugin-webc');
const { EleventyRenderPlugin } = require('@11ty/eleventy');

module.exports = function (eleventyConfig) {
  // eleventyConfig.addPassthroughCopy('admin');
  eleventyConfig.addPlugin(pluginWebc);
  eleventyConfig.addPlugin(EleventyRenderPlugin, {
    tagName: 'renderTemplate', // Change the renderTemplate shortcode name
    tagNameFile: 'renderFile', // Change the renderFile shortcode name
  });

  // eleventyConfig.addCollection('events', function (collectionApi) {
  //   return collectionApi.getFilteredByGlob('src/**/events/*.md');
  // });

  // eleventyConfig.addCollection('ministries', function (collectionApi) {
  //   return collectionApi.getFilteredByGlob('src/ministries/*.md');
  // });

  // eleventyConfig.addCollection('about', function (collectionApi) {
  //   return collectionApi.getFilteredByGlob('src/**/about/*.md');
  // });

  // eleventyConfig.addCollection('service', function (collectionApi) {
  //   return collectionApi.getFilteredByGlob('src/**/service/*.md');
  // });

  return;
};
