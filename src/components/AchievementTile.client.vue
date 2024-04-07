<script setup>
import {Icon} from '@iconify/vue';

defineProps({
    achieved: {type: Boolean, default: false},
    icon: {type: String, required: true},

    gosh: {type: Boolean, default: false},
    shucks: {type: Boolean, default: false},
    dang: {type: Boolean, default: false},
    darn: {type: Boolean, default: false},
    heck: {type: Boolean, default: false},
    frick: {type: Boolean, default: false},
});

</script>

<template>
    <div
        class="relative flex items-center justify-center h-12 w-12 shadow-lg border rounded overflow-hidden"
        :class="{
            'bg-gosh': gosh,
            'bg-shucks': shucks,
            'bg-dang': dang,
            'bg-darn': darn,
            'bg-heck': heck,
            'bg-frick': frick,
        }"
    >
        <Icon :icon="icon" />
        <div v-if="achieved" class="absolute bg-white w-12 h-12 right-0 bottom-0 rotate-45 translate-x-1/2 translate-y-1/2">
            <Icon
                icon="game-icons:check-mark"
                height="12"
                class="text-green-800 absolute top-1/2 left-1 -translate-y-1/2 -rotate-45"
            />
        </div>
    </div>
</template>
