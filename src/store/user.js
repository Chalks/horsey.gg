import {defineStore} from 'pinia';

// eslint-disable-next-line import/prefer-default-export
export const useUserStore = defineStore('userStore', () => {
    const user = ref(null);

    const isAuthenticated = computed(() => user.value != null);

    function setUser(newUser) {
        user.value = newUser;
    }

    return {
        isAuthenticated,
        setUser,
        user,
    };
});


