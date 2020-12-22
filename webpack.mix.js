let mix = require('laravel-mix');

/**.extract([
    '@fortawesome/fontawesome-svg-core',
    '@fortawesome/free-brands-svg-icons',
    '@fortawesome/pro-solid-svg-icons',
    '@fortawesome/pro-regular-svg-icons',
    '@fortawesome/pro-light-svg-icons',
    '@fortawesome/pro-duotone-svg-icons',
    '@fortawesome/fontawesome-pro/js/fontawesome.js',
    '@fortawesome/free-solid-svg-icons',
    '@fortawesome/free-regular-svg-icons',
    '@fortawesome/fontawesome-free/js/fontawesome.js'
])**/

mix.js('resources/js/field.js', 'dist/js');


mix.webpackConfig({
    output: {
        filename:'field.js',
        chunkFilename: '[name].[contenthash].js',
    },
    optimization: {
        runtimeChunk: { name: '/js/manifest' },
        splitChunks: {
            chunks: 'async',
            maxInitialRequests: Infinity,
            minSize: 100000,
            maxSize: 600000,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `npm.${packageName.replace('@', 'a.')}`;
                    }
                }
            }
        }
      },
});


mix.babelConfig({
    plugins: ['@babel/plugin-syntax-dynamic-import'],
});
