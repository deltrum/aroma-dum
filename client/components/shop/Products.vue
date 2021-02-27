<template>
    <div class="products" id="Products">
        <div class="products__items" v-if="shopDataState">
            <article class="products__item" v-for="product in pageProducts" :key="product.id">
                <div class="products__item-img">
                    <nuxt-link class="products__item-img-img" to="#" :style="{ backgroundImage: 'url(' + product.thumbnail + ')' }"></nuxt-link>
                </div>
                <h3 class="products__item-title">{{ product.name }}</h3>
                <div class="products__item-price">{{ product.price }} $</div>
                <button class="buy-btn" @click="addNewProductToCart(product)">Add to cart</button>
            </article>
        </div>

        <div class="products__skeletons" v-else>
            <article class="products__skeleton" v-for="i in 3" :key="i">
                <div class="products__skeleton-img"></div>
                <div class="products__skeleton-title"></div>
                <div class="products__skeleton-price"></div>
                <div class="products__skeleton-btn"></div>
            </article>
        </div>
        <Pagination />
    </div>
</template>

<script lang="ts" >
    import { Vue, Component } from 'vue-property-decorator';
    import Pagination from '@/components/shop/Pagination.vue';

    interface Product {
        id: number;
        brand: object;
        height: object;
        made_in: object;
        name: string;
        slug_name: string;
        price: number;
    }

    @Component({ name: 'Products', components: { Pagination } })
    export default class Products extends Vue {
        pageProducts = [] as Array<Product>;

        get shopDataState(): boolean {
            return this.$store.getters['modules/shop/getDataState'];
        }

        addNewProductToCart(newCartItem: Product): void {
            this.$store.commit('modules/cart/mAddNewProductToCart', {
                product: { id: newCartItem.id, name: newCartItem.name, price: newCartItem.price, thumbnail: newCartItem.thumbnail },
                amount: 1,
            });
        }

        created() {
            this.$nuxt.$on('items-paginated', (data: Array<Product>) => {
                this.pageProducts = data;
            });
        }
    }
</script>
