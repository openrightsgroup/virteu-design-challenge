module.exports = function (eleventyConfig) {


	eleventyConfig.addPassthroughCopy("assets");
	eleventyConfig.addPassthroughCopy("_headers");

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
