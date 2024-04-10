// eslint-disable-next-line
const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './src/assets/**/*.{js,css}',
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
            animation: {
                'fall-rotate-in': 'fallRotate 1s ease-in 1',
            },

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

            keyframes: {
                fallRotate: {
                    '0%': {transform: 'scale(2)'},
                    '10%': {transform: 'rotate(360deg) scale(1.9)'},
                    '20%': {transform: 'rotate(0deg) cale(1.7)'},
                    '30%': {transform: 'rotate(360deg) cale(1.4)'},
                    '40%': {transform: 'rotate(0deg) cale(1.0)'},
                    '50%': {transform: 'rotate(360deg) cale(0.5)'},
                    '60%': {transform: 'rotate(0deg) cale(0.9)'},
                    '70%': {transform: 'rotate(360deg) cale(1.2)'},
                    '80%': {transform: 'rotate(0deg) cale(1.0)'},
                    '90%': {transform: 'rotate(360deg) cale(0.9)'},
                    '100%': {transform: 'rotate(0deg) scale(1)'},
                },
            },
        },
    },

    variants: {
        extend: {},
    },

    plugins: [
        // eslint-disable-next-line
        require('@tailwindcss/typography'),
        function utils({addUtilities}) {
            addUtilities({
                '.max-w-side': {
                    maxWidth: 'calc(50% - 32.5ch)',
                },
                '.ribbon-t': {
                    position: 'relative',
                    clipPath: 'polygon(0 0, 50% 6px, 100% 0, 100% 100%, 0 100%)',
                },
                '.ribbon-r': {
                    position: 'relative',
                    clipPath: 'polygon(0 0, 100% 0, calc(100% - 6px) 50%, 100% 100%, 0 100%)',
                },
                '.ribbon-b': {
                    position: 'relative',
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% calc(100% - 6px), 0 100%)',
                },
                '.ribbon-l': {
                    position: 'relative',
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 6px 50%)',
                },

                '.ribbon-t-as-border': {
                    '@apply border-x': {},
                    'position': 'absolute',
                    'top': '1px',
                    'left': '0',
                    'bottom': '0',
                    'right': '0',
                    'clipPath': 'inherit',
                },

                '.ribbon-r-as-border': {
                    '@apply border-y': {},
                    'position': 'absolute',
                    'top': '0',
                    'left': '0',
                    'bottom': '0',
                    'right': '1px',
                    'clipPath': 'inherit',
                },

                '.ribbon-b-as-border': {
                    '@apply border-x': {},
                    'position': 'absolute',
                    'top': '0',
                    'left': '0',
                    'bottom': '1px',
                    'right': '0',
                    'clipPath': 'inherit',
                },

                '.ribbon-l-as-border': {
                    '@apply border-y': {},
                    'position': 'absolute',
                    'top': '0',
                    'left': '1px',
                    'bottom': '0',
                    'right': '0',
                    'clipPath': 'inherit',
                },
            });
        },
    ],
};
