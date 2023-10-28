<script setup>
import {Icon} from '@iconify/vue';
import {useSampleStore} from 'store/sample.js';
import InterestForm from '~/components/InterestForm.vue';
</script>

<template>
    <div class="absolute inset-0 flex items-center justify-center">
        <div>
            <p class="flex items-center space-x-4">
                <strong>Icon:</strong>
                <Icon icon="mdi:robot-angry" />
            </p>

            <p>
                <strong>Data from Pinia:</strong>
                {{ useSampleStore().sample }}
            </p>

            <InterestForm />
        </div>
    </div>
</template>
