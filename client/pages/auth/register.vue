<template>
    <main class="auth main">
        <div class="container">
            <div class="auth__inner">
                <h4 class="auth__title">Register</h4>
                <form class="auth__form auth__form--wide" @submit.prevent="onLogin()">
                    <div class="auth__group">
                        <label class="auth__label">
                            Username:
                            <input class="auth__input" type="text" placeholder="Username" required v-model="registerData.username" />
                        </label>
                        <label class="auth__label">
                            Email:
                            <input class="auth__input" type="email" placeholder="Email" required v-model="registerData.email" />
                        </label>
                    </div>
                    <div class="auth__group">
                        <label class="auth__label">
                            Fist name:
                            <input class="auth__input" type="text" placeholder="First name" required v-model="registerData.first_name" />
                        </label>
                        <label class="auth__label">
                            Last name:
                            <input class="auth__input" type="email" placeholder="Last name" required v-model="registerData.last_name" />
                        </label>
                    </div>
                    <div class="auth__group">
                        <label class="auth__label">
                            Password:
                            <input class="auth__input" type="password" placeholder="Password" required v-model="registerData.password" />
                        </label>

                        <label class="auth__label">
                            Repeat password:
                            <input class="auth__input" type="password" placeholder="Repeat password" required v-model="registerData.password2" />
                        </label>
                    </div>

                    <button class="auth__btn" type="submit">Register</button>
                    <nuxt-link class="auth__link" :to="{ name: 'auth-login' }">Already registered?</nuxt-link>
                </form>
            </div>
        </div>
    </main>
</template>

<script lang="ts" >
    import { Vue, Component } from 'vue-property-decorator'

    @Component({ name: 'Register' })
    export default class Register extends Vue {
        registerData = {
            username: '' as string,
            email: '' as string,
            first_name: '' as string,
            last_name: '' as string,
            password: '' as string,
            password2: '' as string,
        }

        onLogin() {
            console.log('ga')
        }
    }
</script>