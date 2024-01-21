<script setup>
import {logout} from 'sjwt';
import {useUserStore} from 'store/user.js';

onMounted(async () => {
    await logout();
    useUserStore().setUser(null);
});
</script>

<template>
    <h1>Logout</h1>
    <p>Why would you do that.</p>
</template>


