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
            'tailwindcss/nesting': {},
            'tailwindcss': {},
            'autoprefixer': {},
        },
    },

    css: [
        '~/assets/css/tailwind.css',
        '~/assets/css/iconify.css',
    ],

    modules: [
        '@pinia/nuxt',
    ],

    app: {
        head: {
            title: 'Horsey.gg',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {hid: 'description', name: 'description', content: 'The best knight sight trainer'},
                {hid: 'og-title', property: 'og:title', content: 'Horsey.gg'},
                {hid: 'og-description', property: 'og:description', content: 'The best knight sight trainer'},
                {hid: 'og-type', property: 'og:type', content: 'website'},
                {hid: 'og-site_name', property: 'og:og-site_name', content: 'horsey.gg'},
                {hid: 'twitter-title', property: 'twitter:title', content: 'Horsey.gg'},
                {hid: 'twitter-description', property: 'twitter:description', content: 'The best knight sight trainer'},
                {hid: 'twitter-site', property: 'twitter:site', content: 'horsey.gg'},
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicon.ico',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: '/favicon-16x16.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/favicon-32x32.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '96x96',
                    href: '/favicon-96x96.png',
                },
            ],
        },
    },

    runtimeConfig: {
        public: {
        },
    },

    srcDir: 'src/',

    ssr: false,

    telemetry: false,
});
