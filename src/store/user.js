import {defineStore} from 'pinia';

// eslint-disable-next-line import/prefer-default-export
export const useUserStore = defineStore('userStore', () => {
    const user = ref(null);

    function setUser(newUser) {
        user.value = newUser;
    }

    return {
        user,
        setUser,
    };
});


