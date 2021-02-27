<template>
    <main class="shop main">
        <div class="container">
            <div class="shop__inner">
                <ProductFilter />
                <ProductSorter />
                <Products />
            </div>
        </div>
    </main>
</template>

<script lang="ts" >
    import { Vue, Component } from 'vue-property-decorator';
    import ProductFilter from '@/components/shop/ProductFilter.vue';
    import ProductSorter from '@/components/shop/ProductSorter.vue';
    import Products from '@/components/shop/Products.vue';

    @Component({
        name: 'Shop',
        components: { ProductFilter, ProductSorter, Products },
    })
    export default class Shop extends Vue {}
</script>