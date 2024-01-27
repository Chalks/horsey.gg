<script setup>
defineProps({
    stats: {type: Object, required: true},
});
</script>

<template>
    <pre>{{ stats }}</pre>
</template>
