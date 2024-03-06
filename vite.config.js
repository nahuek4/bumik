import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: [
<<<<<<< HEAD
                'resources/css/app.css',
                'resources/js/App.jsx'
            ],
=======
                '/resources/css/app.css',
                '/resources/js/app.jsx'
                ],
>>>>>>> 6e64d95af7f03a8bd378d962248da6db67d624cc
            refresh: true,
        }),
    ],
});
