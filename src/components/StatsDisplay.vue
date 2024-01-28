<script setup>
import {useBaseStatsStore} from 'store/baseStats.js';

const baseStatsStore = useBaseStatsStore();
</script>

<template>
    <pre>{{ baseStatsStore.baseStats }}</pre>
</template>
