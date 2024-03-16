const config = {
  bail: 1,
  testEnvironment: "node",
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
  verbose: true,
  // collectCoverage: true,
  // collectCoverageFrom: [
  //   '**/*.{js,jsx}',
  //   '!**/node_modules/**',
  //   '!**/vendor/**',
  // ],
  // coveragePathIgnorePatterns: [
  //   "/node_modules/"
  // ]
};

module.exports = config;
