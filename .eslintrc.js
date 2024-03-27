module.exports = {
    root: true,
    globals: {
        defineNuxtConfig: 'readonly',
        defineNuxtPlugin: 'readonly',
        definePageMeta: 'readonly',
        useRuntimeConfig: 'readonly',
        defineNuxtRouteMiddleware: 'readonly',
        useCookie: 'readonly',
        useNuxtApp: 'readonly',
        useRoute: 'readonly',
        useRouter: 'readonly',
        useSeoMeta: 'readonly',
        navigateTo: 'readonly',
        nextTick: 'readonly',
        useFetch: 'readonly',
        $fetch: 'readonly',
        ref: 'readonly',
        computed: 'readonly',
        useHead: 'readonly',
        onMounted: 'readonly',
        watch: 'readonly',
        seo: 'readonly',
    },
    parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2022,
    },
    extends: [
        '@nuxt/eslint-config',
        'airbnb-base',
        'plugin:vue/vue3-recommended',
        'plugin:vitest/recommended',
    ],
    ignorePatterns: ['dist/'],
    plugins: [
        'vitest',
    ],
    rules: {
        'arrow-parens': ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        'import/extensions': 0,
        'import/no-unresolved': 0,
        'indent': ['error', 4, {
            ignoredNodes: ['TemplateLiteral'],
            SwitchCase: 1,
        }],
        'key-spacing': ['error', {mode: 'strict'}],
        'lines-between-class-members': ['error', 'always', {exceptAfterSingleLine: true}],
        'max-len': 0,
        'no-console': ['error', {allow: ['warn', 'error']}],
        'no-multiple-empty-lines': ['error', {max: 2}],
        'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
        'no-underscore-dangle': 0,
        'object-curly-spacing': [2, 'never'],
        'prefer-destructuring': 0,
        'prettier/prettier': 0,
        'quote-props': ['error', 'consistent-as-needed'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'vue/html-indent': ['error', 4],
        'vue/singleline-html-element-content-newline': 0,
        'vue/max-attributes-per-line': ['error', {singleline: 4}],
        'vue/no-multiple-template-root': 0,
        'vue/multi-word-component-names': 0,
        'vue/html-self-closing': ['error', {
            html: {
                void: 'always',
                normal: 'always',
                component: 'always',
            },
            svg: 'always',
            math: 'always',
        }],
    },
};

