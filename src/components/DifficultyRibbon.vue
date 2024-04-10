<script setup>
const props = defineProps({
    disabled: {type: Boolean, default: false},
    on: {type: Boolean, default: false},
    small: {type: Boolean, default: false},
    defaultCursor: {type: Boolean, default: false},
    direction: {type: String, default: 'r'},

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

const vertical = computed(() => props.direction === 't' || props.direction === 'b');
</script>

<template>
    <div
        class="select-none transition-all bg-gray-700"
        :class="{
            '-translate-x-[0rem]': on && direction === 'r',
            '-translate-x-[1rem]': !on && direction === 'r',
            'hover:-translate-x-[0.5rem]': !on && !disabled && direction === 'r',

            'translate-x-[0rem]': on && direction === 'l',
            'translate-x-[1rem]': !on && direction === 'l',
            'hover:translate-x-[0.5rem]': !on && !disabled && direction === 'l',

            '-translate-y-[0rem]': on && direction === 'b',
            '-translate-y-[1rem]': !on && direction === 'b',
            'hover:-translate-y-[0.5rem]': !on && !disabled && direction === 'b',

            'translate-y-[0rem]': on && direction === 't',
            'translate-y-[1rem]': !on && direction === 't',
            'hover:translate-y-[0.5rem]': !on && !disabled && direction === 't',

            'cursor-pointer': !disabled && !defaultCursor,
            'cursor-not-allowed': disabled && !defaultCursor,
            'opacity-30': disabled,

            'w-8': !small && !vertical,
            'h-4': !small && !vertical,
            'w-6': small && !vertical,
            'h-3': small && !vertical,

            'h-8': !small && vertical,
            'w-4': !small && vertical,
            'h-6': small && vertical,
            'w-3': small && vertical,

            'ribbon-r': direction === 'r',
            'ribbon-t': direction === 't',
            'ribbon-b': direction === 'b',
            'ribbon-l': direction === 'l',
        }"
        @click="handleClick"
    >
        <div
            class="border-gray-700"
            :class="{
                'bg-gosh': gosh,
                'bg-shucks': shucks,
                'bg-dang': dang,
                'bg-darn': darn,
                'bg-heck': heck,
                'bg-frick': frick,

                'ribbon-r-as-border': direction === 'r',
                'ribbon-t-as-border': direction === 't',
                'ribbon-b-as-border': direction === 'b',
                'ribbon-l-as-border': direction === 'l',
            }"
        />
    </div>
</template>
