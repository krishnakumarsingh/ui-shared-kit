import StyleDictionary from "style-dictionary";
const outputPath = `src/styles/variables/`;
const inputPath = `src/tokens/properties/`;
const modes = [`light`, `dark`];
const tokenTypes = ["color", "font", "spacing"];
console.log(`☀️ Building light mode...`);
const styleDictionary = StyleDictionary.extend({
	source: [
		// this is saying find any files in the tokens folder
		// that does not have .dark or .light, but ends in .json5
		`${inputPath}/**/!(*.${modes.join(`|*.`)}).json`,
	],

	platforms: {
		js: {
			transformGroup: `js`,
			buildPath: outputPath,
			files: tokenTypes.map((item) => ({
				destination: `${item}.js`,
				format: `javascript/es6`,
				filter: (token) => token.filePath.indexOf(item) > -1,
			})),
		},
	},
}).buildAllPlatforms();

// Dark Mode
// we will only build the files we need to, we don't need to rebuild all the files
console.log(`\n\n🌙 Building dark mode...`);
styleDictionary
	.extend({
		// Using the include array so that theme token overrides don't show
		// warnings in the console.
		include: [`${inputPath}/**/!(*.${modes.join(`|*.`)}).json`],
		source: [`${inputPath}/**/*.dark.json`],
		platforms: {
			js: {
				transformGroup: `js`,
				buildPath: outputPath,
				files: tokenTypes.map((item) => ({
					destination: `${item}-dark.js`,
					format: `javascript/es6`,
					filter: (token) => token.filePath.indexOf(item) > -1 && token.filePath.indexOf(`.dark`) > -1,
				})),
			},
		},
	})
	.buildAllPlatforms();
