<template>
    <main class="auth main">
        <div class="container">
            <div class="auth__inner">
                <h4 class="auth__title">Login</h4>
                <form class="auth__form" @submit.prevent="onLogin()">
                    <label class="auth__label">
                        Username:
                        <input class="auth__input" type="text" placeholder="Username" required v-model="loginData.username" />
                    </label>
                    <label class="auth__label">
                        Password:
                        <input class="auth__input" type="password" placeholder="Password" required v-model="loginData.password" />
                    </label>
                    <button class="auth__btn" type="submit">Login</button>
                    <nuxt-link class="auth__link" :to="{ name: 'auth-register' }">Don't have an account yet?</nuxt-link>
                </form>
            </div>
        </div>
    </main>
</template>

<script lang="ts" >
    import { Vue, Component } from 'vue-property-decorator'

    @Component({ name: 'Login' })
    export default class Login extends Vue {
        loginData = {
            username: '' as string,
            password: '' as string,
        }

        onLogin() {
            console.log('ga')
        }
    }
</script>