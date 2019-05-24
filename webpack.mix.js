const mix = require('laravel-mix');
mix.ts('app.ts', 'app.js')
.webpackConfig(
    {
        node: {
            fs: "empty" // avoids error messages
        }
    });