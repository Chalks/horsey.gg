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
                gosh: colors.green['100'],
                shucks: colors.green['300'],
                dang: colors.yellow['100'],
                darn: colors.yellow['300'],
                heck: colors.red['100'],
                frick: colors.red['300'],
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
