<script setup>
// import AppFooter from '~/components/AppFooter.vue';
// import AppHeader from '~/components/AppHeader.vue';
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <div class="p-4">Header</div>

        <div class="content flex-grow overflow-auto">
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
        </div>

        <div class="p-4">Footer</div>
    </div>
</template>
