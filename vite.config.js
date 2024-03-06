import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/App.jsx',
                'resources/components/Servicios/Servicios.jsx',
                'resources/components/Pages/Contact.jsx',
                'resources/pages/Portfolio.jsx'
            ],
            refresh: true,
        }),
    ],
});
