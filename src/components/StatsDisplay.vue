<script setup>
import {useBaseKnightStore} from 'store/baseKnight.js';

const baseKnightStore = useBaseKnightStore();

defineProps({
    stats: {type: Object, required: true},
});
</script>

<template>
    <pre>{{ stats }}</pre>
    <pre>{{ baseKnightStore.baseStats }}</pre>
</template>
