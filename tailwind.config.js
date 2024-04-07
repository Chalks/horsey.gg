// eslint-disable-next-line
const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './src/components/**/*.{js,vue,ts}',
        './src/layouts/**/*.vue',
        './src/pages/**/*.vue',
        // './plugins/**/*.{js,ts}',
        // './nuxt.config.{js,ts}',
        './src/assets/js/*.js',
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
                gosh: colors.green['200'],
                shucks: colors.green['400'],
                dang: colors.yellow['200'],
                darn: colors.yellow['400'],
                heck: colors.red['200'],
                frick: colors.red['400'],
            },

            gradientColorStopPositions: {
                33: '33%',
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
