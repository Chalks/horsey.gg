import {resolve} from 'path';

export default defineNuxtConfig({
    alias: {
        store: resolve(__dirname, './src/store'),
    },

    devServer: {
        host: '127.0.0.1',
    },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    css: [
        '~/assets/css/tailwind.css',
        '~/assets/css/iconify.css',
        '~/assets/css/fonts.css',
    ],

    modules: [
        '@pinia/nuxt',
    ],

    app: {
        head: {
            title: 'horsey.gg',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '96x96',
                    href: '/horsey.png',
                },
                {
                    rel: 'preload',
                    href: '/fonts/luckiest-guy.ttf',
                    as: 'font',
                    type: 'font/ttf',
                    crossorigin: '',
                },
            ],
        },
    },

    runtimeConfig: {
        public: {
            origin: process.env.NODE_ENV === 'production'
                ? 'https://horsey.gg'
                : 'http://localhost:3333',
            sjwtHost: process.env.NODE_ENV === 'production'
                ? 'https://api.simplejwt.com'
                : 'http://localhost:3001',
            projectId: process.env.NODE_ENV === 'production'
                ? '1062de0d-2d3c-40ce-a110-889c087a1d29'
                : '580e9648-b217-408f-a248-d9ecc122d104',
            telemetryAppId: '4515F7BB-DFF7-45B0-B752-51B921F787F5',
        },
    },

    build: {
        transpile: ['cm-chessboard'],
    },

    srcDir: 'src/',

    ssr: true,

    telemetry: false,
});
