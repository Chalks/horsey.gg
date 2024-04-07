<script setup>
import {useAchievementsStore} from 'store/achievements.js';

const achievementsStore = useAchievementsStore();

defineProps({
    large: {
        type: Boolean,
        default: false,
    },
});

const {$toast} = useNuxtApp();

const clickCount = ref(0);
const clickTimeout = ref(null);

const handleClick = () => {
    clearTimeout(clickTimeout.value);
    clickTimeout.value = setTimeout(() => { clickCount.value = 0; }, 400);

    clickCount.value += 1;

    if (clickCount.value === 1) {
        $toast.success('hi');
    } else if (clickCount.value === 4) {
        $toast.warning('stop it');
    } else if (clickCount.value === 8) {
        $toast.error('seriously, stop');
    } else if (clickCount.value === 16) {
        $toast.error('...');
    } else if (clickCount.value === 32) {
        const unlockText = achievementsStore.unlocked ? 'lock' : 'unlock';
        $toast.success(`Fine, you win. I'll ${unlockText} all the achievements for ya`);
        achievementsStore.toggleGlobalLock();
    }
};
</script>

<template>
    <svg
        version="1.2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2515 3443"
        :width="large ? 60 : 30"
        class="text-horse cursor-pointer"
        @click="handleClick"
    >
        <path id="Layer" fill-rule="evenodd" d="m773.5 1936.2c-63.1 50.4-387.8-240.7-192.8-320.6 180-281.6 110.8-320.6 271.9-589.7-11.3 2-22.7 1.9-34-0.8-63.6-15.1-96.9-104.1-74.4-198.7 22.5-94.6 92.2-159.1 155.8-143.9 9.9 2.3 19 6.4 27.3 12q11.2-62.8 26.9-134.2 253.5-139.4 495.7-84.2 3.4 185 164.4 286.6-104.1-110.9-58.5-376.3 57.4-168.7 65.2-350.4 430.6 409.2 47.6 893.7c84.4 68.6 132.3 172.4 129.7 281.1-2.7 108.7-55.6 210.1-143.3 274.4-76.1 61.1-180.7 72.6-268.3 29.5-87.6-43-142.4-132.9-140.5-230.5q0 0-172.5 214.6 0 0 133.1-122.2c9.5 95.3 70.6 177.6 158.9 214.6q-270.5 131.4-592.2 345zm390.4-895c89.8 0 162.6-94.4 162.6-210.7 0-116.4-72.8-210.8-162.6-210.8-89.8 0-162.7 94.4-162.7 210.8 0 116.3 72.9 210.7 162.7 210.7zm-277.7-158.4c25.1 3.2 49.2-24.5 53.9-61.8 4.7-37.3-11.7-70.2-36.8-73.3-25.1-3.2-49.2 24.5-54 61.8-4.7 37.3 11.8 70.1 36.9 73.3z" fill="currentColor" />
        <path id="Layer" fill-rule="evenodd" d="m1986.2 2448.2c485-472.7 492.4-1400.5-44.6-1835q-14.7 148-139.9 332.8c85.6 87.8 127.7 209.1 115.2 331-12.6 122-78.7 232.1-180.3 300.6-599 416.8-1286.4 652.2-1279.6 1187 843.9 0 1607.9 0 1607.9 0q-20.7-283.8-355.8-429.2 185.9 19.5 277 112.8z" fill="currentColor" />
        <path id="Layer" fill-rule="evenodd" d="m2410.3 1339.8c53.9-386.6-40.6-713.1-251.2-946.9q-13.8 56.2-40.4 121.8 20.2-65 16.2-147.8c-64.3-66.4-138.3-124.8-221.4-174.3q44.2 154.8 35.6 338.5c272.6 180.2 444.8 480 461.2 808.7zm-868.3-1294.2c-44.7-10.6-90.9-19.4-138.4-26.3q-7.6 85.7-53.6 199.3 26.9-86.8 10.7-205c-95.3-11.4-195.8-15.7-301.2-12.1q44.2 88.6 51 243.5-14.5-112.1-109.9-240.8c-74.4 4.5-151.1 12.8-230 24.9q135.9 212.7 164.2 432.3c167.2-80.2 350.5-112.6 530.4-97.8 19.6-109.5 60-204.5 76.8-318z" fill="currentColor" />
        <path id="Layer" fill-rule="evenodd" d="m1257.4 3108.4h1009.4c146.8 33.5 227.4 215.4 248 333.8h-1257.4-1257.3c20.5-118.3 101.2-300.3 248-333.8z" fill="currentColor" />
        <path id="Layer" fill-rule="evenodd" d="m1257.4 2829.8h815.1c118.6 21.4 183.7 137.8 200.3 213.6h-1015.4-1015.3c16.6-75.8 81.7-192.2 200.2-213.6z" fill="currentColor" />
        <path id="Layer" d="m1097.8 862.1c-33.8-4.4-55.9-48.7-49.4-99 6.6-50.4 39.2-87.5 73-83.1 33.8 4.4 55.9 48.6 49.4 99-6.6 50.3-39.2 87.5-73 83.1z" fill="currentColor" />
    </svg>
</template>
