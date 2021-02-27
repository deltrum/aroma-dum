<template>
    <main class="product main">
        <div class="container">
            <div class="product__inner"></div>
        </div>
    </main>
</template>

<script lang="ts" >
    import { Vue, Component } from 'vue-property-decorator';

    @Component({
        name: 'Product',
    })
    export default class Product extends Vue {}
</script>