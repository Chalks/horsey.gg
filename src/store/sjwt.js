import {defineStore} from 'pinia';

const SJWT_API = 'https://api.simplejwt.com';
const PROJECT_ID = '1062de0d-2d3c-40ce-a110-889c087a1d29';
const AUTH_COOKIE_NAME = 'horsey-auth';

// eslint-disable-next-line import/prefer-default-export
export const useSjwtStore = defineStore('sjwtStore', () => {
    const loading = ref(false);
    const user = ref(null);
    const token = ref(null);
    const tokenExpiry = ref(0);

    const isTokenExpired = computed(() => new Date().getTime() > tokenExpiry.value * 1000);
    // const authorized = computed(() => user.value && !isTokenExpired.value);
    // const authHeaderValue = computed(() => `Bearer ${token.value}`);
    // const plan = computed(() => user.value?.plan ?? {});
    // const limitProjects = computed(() => plan.value?.limitProjects ?? 0);
    // const limitUsersPerProject = computed(() => plan.value?.limitUsersPerProject ?? 0);

    function reset() {
        loading.value = false;
        user.value = null;
        token.value = null;
        tokenExpiry.value = 0;

        const authCookie = useCookie(AUTH_COOKIE_NAME, {sameSite: true});
        authCookie.value = null;
    }

    function setUserWithToken(u, t) {
        user.value = u;
        token.value = t;

        try {
            const atob = process.client
                ? window.atob
                : (data) => Buffer.from(data, 'base64').toString('ascii');

            // read the jwt payload expiration
            const payload = JSON.parse(atob(t.split('.')[1]));
            tokenExpiry.value = payload.exp;

            // set the cookie for the token to stay logged in
            const authCookie = useCookie(AUTH_COOKIE_NAME, {
                expires: new Date(payload.exp * 1000),
                sameSite: true,
            });
            authCookie.value = t;
        } catch (e) {
            console.error('error decoding jwt', e);
            reset();
            return false;
        }

        if (isTokenExpired.value === true) {
            reset();
            return false;
        }

        return true;
    }

    async function register(email, password) {
        loading.value = true;

        const url = `${SJWT_API}/v1/auth/${PROJECT_ID}/register`;
        const result = await $fetch(url, {
            method: 'post',
            body: {
                email,
                password,
            },
        })
            .then((response) => response ?? null)
            .catch((err) => err?.data ?? null);

        if (result.user && result.token) {
            setUserWithToken(result.user, result.token);
        }

        loading.value = false;
        return result;
    }

    function login() {
    }

    function logout() {
    }

    function changePassword() {
    }

    function whoami() {
    }

    function invalidateTokens() {
    }

    return {
        register,
    };
    /*
    function setToken(t) {
        if (authorized.value) {
            setUserWithToken({user: user.value, token: t});
        }
    }

    async function logout() {
        if (token.value) {
            const url = `${useRuntimeConfig().public.jwtApi}/auth/logout`;
            try {
                await useFetch(url, {
                    method: 'get',
                    headers: {
                        Authorization: authHeaderValue.value,
                    },
                });
            } catch (e) {
                console.error(e);
            }
        }

        user.value = null;
        token.value = null;
        tokenExpiry.value = 0;
        const authCookie = useCookie(useRuntimeConfig().public.authCookieName, {sameSite: true});
        authCookie.value = null;
    }

    return {
        authorized,
        authHeaderValue,
        user,
        plan,
        token,
        tokenExpiry,
        isTokenExpired,
        setUserWithToken,
        setToken,
        logout,
        limitProjects,
        limitUsersPerProject,
    };
*/
});


