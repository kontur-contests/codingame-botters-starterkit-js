import babel from 'rollup-plugin-babel'
import multiEntry from 'rollup-plugin-multi-entry'

export default {
    input: 'src/**/*.test.js',
    output: {
        file: 'bundle-test.js',
        format: 'cjs'
    },
    external: [
        'ava'
    ],
    plugins: [
        multiEntry(),
        babel({
            exclude: 'node_modules/**'
        })
    ]
}