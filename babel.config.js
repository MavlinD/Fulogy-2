module.exports = {
    presets: [
        // '@babel/preset-flow',
        "@babel/preset-react",
        "@babel/preset-env",

    ],
    plugins: [
        "react-hot-loader/babel",
        // "transform-decorators-legacy" /* should always be the first plugin! */
        "@babel/plugin-transform-runtime",
        [
            "@babel/plugin-proposal-decorators",
            {
                legacy: true
            }
        ],
        [
            "@babel/plugin-proposal-class-properties",
            {
                loose: true
            }
        ],
        "@babel/plugin-transform-flow-comments",
    ]
}
