const mix = require('laravel-mix');

mix.js('resources/js/App.jsx', 'public/js')
   .css('resources/css/app.css', 'public/css')
   .react()
   .version();
