// rollup.config.js

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**", // Exclude node_modules from Babel transpilation
    }),
    terser(), // Optional: Minify the bundle
  ],
  external: ["react", "react-dom", "react-emoji-picker", "emoji-mart"], // Add the emoji picker libraries here
};
