let mix = require('laravel-mix')

mix.babelConfig({
    plugins: ['@babel/plugin-syntax-dynamic-import'],
});


mix.js('resources/js/field.js', 'dist/js');