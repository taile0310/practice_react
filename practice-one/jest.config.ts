export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
  },
  transform: {
    // "^.+\\.css$": "jest-transform-stub",
    "^.+\\.tsx?$": "ts-jest",
    ".+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|gif)$":
      "jest-transform-stub",
  },
};
