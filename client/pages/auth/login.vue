<template>
    <main class="login main">
        <div class="container">
            <div class="login__inner"></div>
        </div>
    </main>
</template>

<script lang="ts" >
import { Vue, Component } from "vue-property-decorator";

@Component({ name: "Login" })
export default class Login extends Vue {}
</script>