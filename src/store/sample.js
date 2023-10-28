import {defineStore} from 'pinia';

// eslint-disable-next-line import/prefer-default-export
export const useSampleStore = defineStore('sampleStore', () => {
    const sample = ref('Sample pinia store item');

    function setSample(newSample) {
        sample.value = newSample;
    }

    return {
        sample,
        setSample,
    };
});

