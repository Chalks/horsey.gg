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
        colors: {
            white: colors.white,
            blue: {
                50: '#f0f9ff',
                100: '#e0f2fe',
                200: '#bbe6fc',
                300: '#78d0fa',
                400: '#3bbcf5',
                500: '#11a4e6',
                600: '#0583c4',
                700: '#05689f',
                800: '#095883',
                900: '#0d4a6d',
                950: '#092f48',
            },

            gray: {
                50: '#f5f6f6',
                100: '#e4e8e9',
                200: '#ccd2d5',
                300: '#a8b3b8',
                400: '#7d8c93',
                500: '#64737a',
                600: '#545f66',
                700: '#485156',
                800: '#40464a',
                900: '#383c41',
                950: '#232629',
            },

            red: {
                50: '#fef3f2',
                100: '#fee4e2',
                200: '#ffccc9',
                300: '#fdaaa4',
                400: '#fa746b',
                500: '#f24c41',
                600: '#df2f23',
                700: '#bb241a',
                800: '#9b2119',
                900: '#81211b',
                950: '#460d09',
            },

            yellow: {
                50: '#feffe6',
                100: '#fbffc8',
                200: '#f5fe98',
                300: '#ebfa6b',
                400: '#d8ef2c',
                500: '#bbd60c',
                600: '#91ab05',
                700: '#6e8209',
                800: '#57660e',
                900: '#485611',
                950: '#263003',
            },

            green: {
                50: '#ecffe6',
                100: '#d5ffc8',
                200: '#aefe98',
                300: '#88fa6b',
                400: '#51ef2c',
                500: '#2fd60c',
                600: '#1eab05',
                700: '#1a8209',
                800: '#1a660e',
                900: '#185611',
                950: '#073003',
            },
        },
        container: {
            padding: '2rem',
        },

        extend: {},
    },

    variants: {
        extend: {},
    },

    plugins: [
        // eslint-disable-next-line
        require('@tailwindcss/typography'),
    ],
};
