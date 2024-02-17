<script setup>
const year = new Date().getUTCFullYear();
</script>

<template>
    <div class="max-w-prose mx-auto flex justify-end items-end w-full px-4 md:px-0">
        <HorsefaceIcon large class="text-horse" />
    </div>
    <div class="bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 text-gray-100 px-4 py-4 md:py-12">
        <div class="max-w-prose mx-auto flex justify-between items-center">
            <span class="text-sm">Copyright © {{ year }}</span>
            <a href="https://simplejwt.com" class="group text-sm">
                Built with <span class="text-red-300 group-hover:text-red-500 transition-colors">SJWT</span>
            </a>
        </div>
    </div>
</template>
