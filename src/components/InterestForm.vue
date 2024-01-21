<script setup>
useHead({
    script: [{
        src: 'https://www.google.com/recaptcha/api.js',
    }],
});

const interestForm = ref(null);
const emailField = ref(null);
const email = ref('');
const message = ref('');

const onSubmit = () => { interestForm.value.submit(); };
const focus = () => { emailField.value.focus(); };

onMounted(() => {
    window.recaptchaJank = onSubmit;
    focus();
});
</script>
<template>
    <form
        ref="interestForm"
        action="https://api.formcake.com/api/form/FIXME"
        method="post"
    >
        <input type="hidden" name="honey" />

        <input
            ref="emailField"
            v-model="email"
            type="email"
            name="email"
            placeholder="Your email address"
        />

        <input
            v-model="message"
            type="text"
            name="message"
            placeholder="What should I put on this site"
        />

        <button
            class="g-recaptcha submit"
            data-sitekey="6Lf6IyUaAAAAAPTTe__sC4052VzvGcwFlBHeajA0"
            data-callback="recaptchaJank"
            data-action="submit"
        >
            SUBMIT
        </button>
    </form>
</template>

