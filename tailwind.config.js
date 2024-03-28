// eslint-disable-next-line
const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './src/components/**/*.{js,vue,ts}',
        './src/layouts/**/*.vue',
        './src/pages/**/*.vue',
        // './plugins/**/*.{js,ts}',
        // './nuxt.config.{js,ts}',
        './src/app.vue',
    ],

    darkMode: 'class',

    theme: {
        container: {
            padding: '2rem',
        },

        extend: {
            colors: {
                horse: '#5D9945',
                easy: colors.green['100'],
                dang: colors.yellow['100'],
                damn: colors.red['100'],
            },
        },
    },

    variants: {
        extend: {},
    },

    plugins: [
        // eslint-disable-next-line
        require('@tailwindcss/typography'),
    ],
};
