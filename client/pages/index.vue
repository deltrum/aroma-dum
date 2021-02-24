<template>
    <main class="home main">
        <div class="container">
            <div class="home__inner"></div>
        </div>
    </main>
</template>

<script lang="ts" >
import { Vue, Component } from "vue-property-decorator";

@Component({ name: "Home" })
export default class Home extends Vue {}
</script>