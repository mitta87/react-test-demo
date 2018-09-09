module.exports = {
	collectCoverageFrom: [
		"**/*.{js,jsx}"
	],
	coveragePathIgnorePatterns: [
		"/coverage/"
	],
	moduleNameMapper: {
		"^.+\\.(css|less)$": "identity-obj-proxy"
	},
	resetMocks: true,
	resetModules: true,
	rootDir: "./frontend/src",
	setupTestFrameworkScriptFile: "<rootDir>__tests__/setup/setupTests.js",
	snapshotSerializers: ["enzyme-to-json/serializer"],
	testPathIgnorePatterns: ["/node_modules/", "/__tests__/setup/"],
	transform: {
		"^.+\\.jsx?$": "babel-jest"
	}
};