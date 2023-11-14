export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    ".+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|gif)$":
      "jest-transform-stub",
  },
};
