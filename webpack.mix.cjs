const mix = require('laravel-mix');

mix.webpackConfig({
    resolve: {
        extensions: [".*", ".wasm", ".mjs", ".js", ".jsx", ".json", ".vue"]
    }
});

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sourceMaps();
