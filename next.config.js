const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

const nextConfig = {
	trailingSlash: true,
	future: {
		webpack5: true,
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
	exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
		return {
			"/": { page: "/" },
			"/blog": { page: "/blog" },
			"/portfolio": { page: "/portfolio" },
			"/privacy": { page: "/privacy" },
			"/resume": { page: "/resume" },
		};
	},
};

module.exports = withPlugins([
	[
		optimizedImages,
		{
			// these are the default values so you don't have to provide them if they are good enough for your use-case.
			// but you can overwrite them here with any valid value you want.
			imagesFolder: "images",
			handleImages: ["jpeg", "png", "svg", "webp"],
			mozjpeg: {
				quality: 75,
			},
			webp: {
				preset: "default",
				quality: 50,
			},
		},
	],
	nextConfig,
]);
