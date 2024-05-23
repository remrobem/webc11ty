module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('admin');

  eleventyConfig.addCollection('events', function (collectionApi) {
    return collectionApi.getFilteredByGlob('src/events/*.md');
  });

  eleventyConfig.addCollection('ministries', function (collectionApi) {
    return collectionApi.getFilteredByGlob('src/ministries/*.md');
  });

  eleventyConfig.addCollection('about', function (collectionApi) {
    return collectionApi.getFilteredByGlob('src/**/about/*.md');
  });

  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
    },
    passthroughFileCopy: true,
    templateFormats: ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
};
