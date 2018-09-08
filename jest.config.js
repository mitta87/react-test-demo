module.exports = {
	collectCoverageFrom: [
		"**/frontend/*.{js,jsx}"
	],
	resetMocks: true,
	resetModules: true,
	rootDir: "./frontend/src",
	transform: {
		"^.+\\.js$": "babel-jest"
	}
};