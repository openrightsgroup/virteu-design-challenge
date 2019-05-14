module.exports = function (eleventyConfig) {
	// Collections
	// eleventyConfig.addCollection("pages", (collection) => {
	// 	return collection.getFilteredByGlob("pages/*.md");
	// });

	eleventyConfig.addPassthroughCopy("assets");
	// eleventyConfig.addPassthroughCopy("_headers");

	return {
		passthroughFileCopy: true,
		dir: {
			input: ".",
			includes: "_includes",
			data: "_data",
			output: "_site"
		}
	};
};
