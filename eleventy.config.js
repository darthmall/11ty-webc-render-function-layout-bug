const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(pluginWebc, {
		components: "src/components/**/*.webc"
	});

	return {
		dir: {
			input: "src/pages",
			layouts: "../layouts",
			includes: "../components",
		},
		markdownTemplateEngine: false
	};
};
