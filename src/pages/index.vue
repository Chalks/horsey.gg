<script setup>
import {Icon} from '@iconify/vue';
import {useSampleStore} from 'store/sample.js';
import InterestForm from '~/components/InterestForm.vue';
</script>

<template>
    <h1>Horsey.gg</h1>
    <h2>subheading</h2>
    <a href="google.com">google</a>
    <p class="flex items-center space-x-4">
        <strong>Icon:</strong>
        <Icon icon="mdi:robot-angry" />
    </p>

    <p>
        <strong>Data from Pinia:</strong>
        {{ useSampleStore().sample }}
    </p>

    <InterestForm />
</template>
