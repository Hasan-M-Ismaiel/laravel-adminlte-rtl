import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import rtlcss from "rtlcss";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
                'resources/css/adminlte-rtl.css',
                'resources/css/adminlte.css',
            ],
            refresh: true,
        }),
        {
            name:'rtlcss',
            transform: (code,id) => {
                if(id.includes('adminlte-rtl.css')){
                    return rtlcss.process(code);
                }
            },
        },
    ],
});
