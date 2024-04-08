<script setup>
const props = defineProps({
    disabled: {type: Boolean, default: false},
    on: {type: Boolean, default: false},
    gosh: {type: Boolean, default: false},
    shucks: {type: Boolean, default: false},
    dang: {type: Boolean, default: false},
    darn: {type: Boolean, default: false},
    heck: {type: Boolean, default: false},
    frick: {type: Boolean, default: false},
});

const emit = defineEmits(['click']);

const handleClick = () => {
    if (!props.disabled) {
        emit('click');
    }
};
</script>

<template>
    <div
        class="select-none transition-all ribbon-r w-8 h-4 bg-gray-700"
        :class="{
            '-translate-x-[0rem]': on,
            '-translate-x-[1rem]': !on,
            'hover:-translate-x-[0.5rem]': !on && !disabled,
            'cursor-pointer': !disabled,
            'cursor-not-allowed': disabled,
            'opacity-30': disabled,
        }"
        @click="handleClick"
    >
        <div
            class="ribbon-r-as-border border-gray-700"
            :class="{
                'bg-gosh': gosh,
                'bg-shucks': shucks,
                'bg-dang': dang,
                'bg-darn': darn,
                'bg-heck': heck,
                'bg-frick': frick,
            }"
        />
    </div>
</template>
