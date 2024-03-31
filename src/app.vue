<script setup>
const hidden = ref(true);

onMounted(() => {
    hidden.value = false;
});
</script>
<template>
    <NuxtLayout>
        <Transition
            enter-active-class="duration-300 ease-out opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="duration-200 ease-in"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div v-if="hidden" class="fixed inset-0 z-[1000] bg-white" />
        </Transition>
        <NuxtPage />
    </NuxtLayout>
</template>
