<template>
    <div class="products" id="Products">
        <div class="products__items">
            <article class="products__item" v-for="i in 6" :key="i">
                <div class="products__item-img">
                    <nuxt-link class="products__item-img-img" to="#" style="background-image: url('https://s3-alpha-sig.figma.com/img/e501/21b1/2b7751d0ecf8834b2bd6e808d598fe7d?Expires=1615161600&Signature=G1Vx1aNBB8fF5LEeM5rc4qSSt0AHygS1K0m1NQ0XTSd9IXWO5CbVGgegCzWbCximW6aEkJxX8tNKg95WgiA9sF8e8y8rChvJyK8E6b1lLRONqTlXlxnJVkkc4Gvx05PBenJINF1L~KNatzycIPG272qFR8A8my~QKeXuflhGfgq1o6m2gqhs4fOtiRjAQTxZmrhlXoBCsbAnYdAtbzlEIbk0tdmR6qE9wUM8i~92ucC5PvZfxkzgELv3W5~VubNo5t5J2tOqr0BtlwePcYBy~dD17hcb4Gj494DS3GtI2UPFoeoZP9x6E1kmsUc8zby-5HAryP-0twPqSkFnj3Zjwg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')"></nuxt-link>
                </div>
                <h3 class="products__item-title">Test tittle of a hookaass made in china</h3>
                <div class="products__item-price">1200 $</div>
                <button class="buy-btn">Add to cart</button>
            </article>
        </div>

        <Pagination />
    </div>
</template>

<script lang="ts" >
    import { Vue, Component } from 'vue-property-decorator'
    import Pagination from '@/components/shop/Pagination.vue'

    @Component({ name: 'Products', components: { Pagination } })
    export default class Products extends Vue {}
</script>
