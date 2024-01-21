import {sjwt, getAuthenticatedUser} from 'sjwt';
import {useUserStore} from 'store/user.js';

export default defineNuxtPlugin({
    name: 'sjwt',
    hooks: {
        'app:beforeMount': async () => {
            const user = await getAuthenticatedUser();
            useUserStore().setUser(user);
        },
        'app:created': () => {
            sjwt.configure({
                host: useRuntimeConfig().public.sjwtHost,
                projectId: useRuntimeConfig().public.projectId,
            });
        },
    },
});
