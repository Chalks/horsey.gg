import {defineConfig} from 'vitest/config';
import path from 'path';

export default defineConfig({
    test: {
        watch: false,
    },
    resolve: {
        alias: {
            assets: path.resolve(__dirname, './src/assets'),
        },
    },
});
