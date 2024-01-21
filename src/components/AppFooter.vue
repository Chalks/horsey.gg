<script setup>
const year = new Date().getUTCFullYear();
</script>

<template>
    <div class="flex justify-between items-center bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 text-gray-100 p-4 md:p-12">
        <span class="text-sm">Copyright © {{ year }}</span>
        <a href="https://simplejwt.com" class="group text-sm">
            Built with <span class="text-red-300 group-hover:text-red-500 transition-colors">SJWT</span>
        </a>
    </div>
</template>
