<script setup>
defineProps({
    achieved: {type: Boolean, default: false},
});
</script>

<template>
    <div
        class="h-12 w-12 shadow-lg border rounded overflow-hidden hover:opacity-100 transition-opacity"
        :class="{
            'bg-gray-300': !achieved,
            'opacity-50': !achieved,
            'opacity-100': achieved,
            'bg-green-300': achieved,
        }"
    />
</template>
