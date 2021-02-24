<template>
    <main class="cart main">
        <div class="container">
            <div class="cart__inner"></div>
        </div>
    </main>
</template>

<script lang="ts" >
import { Vue, Component } from "vue-property-decorator";

@Component({ name: "Cart" })
export default class Cart extends Vue {}
</script>