<script setup>
import {login, sjwt} from 'sjwt';
import {useUserStore} from 'store/user.js';

seo({
    pageTitle: 'login - horsey.gg',
});

const email = ref('');
const password = ref('');
const loading = ref(false);

const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading.value === true) {
        return;
    }

    loading.value = true;

    const response = await login({
        email: email.value,
        password: password.value,
    });

    if (response.token) {
        useUserStore().setUser(sjwt.user);
        navigateTo('/');
    } else {
        const {$toast} = useNuxtApp();
        $toast.error(response.message);
    }

    loading.value = false;
};

</script>

<template>
    <h1>Login</h1>
    <form @submit="handleSubmit">
        <label for="email" class="cursor-pointer">Email</label>
        <input
            id="email"
            v-model="email"
            type="email"
            name="email"
            placeholder="Email"
        />

        <label for="password" class="cursor-pointer">Password</label>
        <input
            id="password"
            v-model="password"
            type="password"
            name="password"
            placeholder="********"
        />

        <div class="relative">
            <input type="submit" value="Login" :disabled="loading" />
            <div class="text-white absolute top-1/2 left-4 -translate-y-1/2">
                <LoadingSpinner v-if="loading" />
            </div>
        </div>
    </form>
</template>

