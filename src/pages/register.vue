<script setup>
import {register, sjwt, save} from 'sjwt';
import {useUserStore} from 'store/user.js';

seo({
    pageTitle: 'register - horsey.gg',
});

const displayName = ref('');
const email = ref('');
const password = ref('');
const loading = ref(false);

const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading.value === true) {
        return;
    }

    loading.value = true;

    const response = await register({
        email: email.value,
        password: password.value,
    });

    if (response.token) {
        await save({
            publicData: {
                displayName: displayName.value,
            },
        });

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
    <h1>Register</h1>
    <form @submit="handleSubmit">
        <p>
            Your horsey.gg account will enable you to track stats, and if you
            want we'll notify you when new game modes are available.
        </p>

        <label for="email" class="cursor-pointer">Email</label>
        <input
            id="email"
            v-model="email"
            type="email"
            name="email"
            placeholder="Email"
        />

        <label for="displayName" class="cursor-pointer">Display Name</label>
        <input
            id="displayName"
            v-model="displayName"
            type="displayName"
            name="displayName"
            placeholder="Display Name"
        />

        <label for="password" class="cursor-pointer">Password</label>
        <input
            id="password"
            v-model="password"
            type="password"
            name="password"
            placeholder="********"
        />

        <div class="flex items-center">
            <input id="subscribe" type="checkbox" class="w-auto mr-4" checked />
            <label for="subscribe" class="cursor-pointer">
                Tell me when there are new horseys to play with
            </label>
        </div>

        <div class="relative">
            <input type="submit" value="Register" :disabled="loading" />
            <div class="text-white absolute top-1/2 left-4 -translate-y-1/2">
                <LoadingSpinner v-if="loading" />
            </div>
        </div>
    </form>
</template>


