import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

const config = [
    // first configuration defines how the actual Javascript code of our library is generated.
    {
        input: "src/components/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({ tsconfig: "./tsconfig.json" }),
            postcss(),
        ],
    },
    // second configuration object defines how our libraries types are distributed and uses the dts plugin to do so.
    {
        input: "dist/esm/types/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts()],
        external: [/\.(css|less|scss)$/],
    },
];

export default config;
