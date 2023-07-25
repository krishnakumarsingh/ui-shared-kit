import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve'
import dts from 'rollup-plugin-dts'
// import { fileURLToPath } from 'url';
// const __filename = fileURLToPath(import.meta.url);
// global['__filename'] = __filename;
// const packageJson = require("./package.json");
import packageJson from './package.json' assert { type: 'json' }

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true,
            },
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({
                tsconfig: './tsconfig.json',
                declaration: true,
                declarationDir: 'dist',
            }),
            postcss(),
        ],
    },
    {
        input: 'dist/esm/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts()],
        external: [/\.(css|less|scss)$/],
    },
]
