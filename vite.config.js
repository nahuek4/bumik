import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';;

export default defineConfig({
    build: {
        outDir: 'public/build', // Verifica que sea correcto
        manifest: true, // Asegúrate de que esté habilitado
    },
    plugins: [
        react(),
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/App.jsx'
            ],
            refresh: true,
        })],
});
