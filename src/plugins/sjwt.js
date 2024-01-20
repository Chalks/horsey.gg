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
                projectId: '1062de0d-2d3c-40ce-a110-889c087a1d29',
            });
        },
    },
});
