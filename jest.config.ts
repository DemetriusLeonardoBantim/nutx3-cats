import type { Config } from 'jest';


const config: Config = module.exports = {
  roots: ['/<rootDir>/components/**'],
  moduleFileExtensions: [
    "js",
    "json",
    "ts",
    // tell Jest to handle `*.vue` files
    "vue"
  ],
  transform: {
    // process `*.vue` files with `vue-jest`
    "^.+\\.vue$": "vue-jest",
    "^.+\\.js$": "babel-jest",
    '.+\\.ts$': 'ts-jest'
  }
};

export default config;