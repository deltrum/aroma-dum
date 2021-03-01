<template>
    <div class="pagination" v-if="pageCount">
        <ul class="pagination__list">
            <li class="pagination__item" v-if="products.previous" @click="probePrevPage()">
                <a class="pagination__link pagination__link--arrow" href="#Products">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11.317" height="20.556" viewBox="0 0 11.317 20.556">
                        <path
                            id="down-chevron"
                            d="M19.488,91.567l-9.21,9.18-9.21-9.18L0,92.639l10.278,10.245L20.556,92.639Z"
                            transform="translate(102.884) rotate(90)"
                        />
                    </svg>
                </a>
            </li>
            <li class="pagination__item" v-for="i in pageCount" :key="i" @click="currentPage = i">
                <a
                    class="pagination__link"
                    :class="{ 'pagination__link--active': currentPage == i }"
                    href="#Products"
                    >{{ i }}</a
                >
            </li>
            <li class="pagination__item" v-if="products.next" @click="probeNextPage()">
                <a class="pagination__link pagination__link--arrow" href="#Products">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11.317" height="20.556" viewBox="0 0 11.317 20.556">
                        <path
                            id="down-chevron"
                            d="M19.488,91.567l-9.21,9.18-9.21-9.18L0,92.639l10.278,10.245L20.556,92.639Z"
                            transform="translate(-91.567 20.556) rotate(-90)"
                        />
                    </svg>
                </a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" >
    import { Vue, Component, Watch } from 'vue-property-decorator';

    interface Product {
        id: number;
        brand: object;
        height: object;
        made_in: object;
        name: string;
        slug_name: string;
        price: number;
        thumbnail: string;
    }

    @Component({ name: 'Pagination' })
    export default class Pagination extends Vue {
        currentPage = 1 as number;
        perPage = 6 as number;
        pageCount = [] as Array<number>;
        productsRef = [] as Array<Product>;

        get products(): Array<Product> {
            return this.$store.getters['modules/shop/getProducts'];
        }

        @Watch('products')
        onProductsChange(): void {
            this.startPagination();
        }

        @Watch('currentPage')
        onCurrentPageChange(): void {
            this.showPageItems(this.currentPage);
        }

        fetchProducts(): void {
            if (this.products.length === 0) {
                this.$store.dispatch('modules/shop/fetchProducts');
            }
        }

        startPagination(): void {
            if (this.products.length > 0) {
                this.productsRef = this.products.slice();
                this.paginationManager();
            } else {
                this.pageCount = [];
                this.currentPage = 1;
                this.$nuxt.$emit('items-paginated', this.products);
            }
        }

        paginationManager(): void {
            this.pageCount = [];
            this.currentPage = 1;
            this.paginate();
            this.showPageItems(this.currentPage);
        }

        paginate(): void {
            // Adding for from 1 to infinitty order
            let pageCountNumber: number = Math.ceil(this.productsRef.length / this.perPage) + 1;

            for (let i: number = 1; i < pageCountNumber; i++) {
                this.pageCount.push(i);
            }
        }

        showPageItems(pageIndex: number): void {
            if (pageIndex) {
                this.currentPage = pageIndex;
            }

            var pageItems = [] as Array<Product>;

            if (this.productsRef.length <= this.perPage) {
                pageItems = this.productsRef;
            } else {
                // Subtracting 1 to order from 1
                let startScope: number = this.perPage * (this.currentPage - 1);
                let endScope: number = startScope + this.perPage;
                pageItems = this.productsRef.slice(startScope, endScope);
            }
            if (pageItems.length > 0) {
                this.$nuxt.$emit('items-paginated', pageItems);
            }
        }

        probeNextPage(): boolean {
            if (this.pageCount.length >= this.currentPage + 1) {
                return true;
            }
            return false;
        }

        probePrevPage(): boolean {
            if (this.currentPage - 1 >= 1) {
                return true;
            }
            return false;
        }

        created() {
            this.fetchProducts();
        }

        mounted() {
            this.startPagination();
        }
    }
</script>
