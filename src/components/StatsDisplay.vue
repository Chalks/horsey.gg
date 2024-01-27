<script setup>
import {useBaseStatsStore} from 'store/baseStats.js';

const baseStatsStore = useBaseStatsStore();
// import {useUserStore} from 'store/user.js';

// const userStore = useUserStore();
// const {saveFile} = userStore;
</script>

<template>
    <pre>{{ baseStatsStore.baseStats }}</pre>
</template>
