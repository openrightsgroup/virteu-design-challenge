module.exports = function (eleventyConfig) {

	let markdownIt = require("markdown-it");
	let options = {
		html: true,
		breaks: true,
		linkify: true
	};

	eleventyConfig.setLibrary("md", markdownIt(options));
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
