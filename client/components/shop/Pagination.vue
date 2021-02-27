<template>
    <div class="pagination" v-if="pageCount">
        <ul class="pagination__list">
            <li class="pagination__item" v-if="products.previous" @click="fetchProductPage(currentPage - 1)">
                <a class="pagination__link pagination__link--arrow" href="#Products">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11.317" height="20.556" viewBox="0 0 11.317 20.556">
                        <path id="down-chevron" d="M19.488,91.567l-9.21,9.18-9.21-9.18L0,92.639l10.278,10.245L20.556,92.639Z" transform="translate(102.884) rotate(90)" />
                    </svg>
                </a>
            </li>
            <li class="pagination__item" v-for="i in pageCount" :key="i" @click="fetchProductPage(i)">
                <a class="pagination__link" :class="{ 'pagination__link--active': currentPage == i }" href="#Products">{{ i }}</a>
            </li>
            <li class="pagination__item" v-if="products.next" @click="fetchProductPage(currentPage + 1)">
                <a class="pagination__link pagination__link--arrow" href="#Products">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11.317" height="20.556" viewBox="0 0 11.317 20.556">
                        <path id="down-chevron" d="M19.488,91.567l-9.21,9.18-9.21-9.18L0,92.639l10.278,10.245L20.556,92.639Z" transform="translate(-91.567 20.556) rotate(-90)" />
                    </svg>
                </a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" >
    import { Vue, Component } from 'vue-property-decorator';

    @Component({ name: 'Pagination' })
    export default class Pagination extends Vue {
        currentPage = 1 as number;

        get products() {
            return this.$store.getters['modules/shop/getProducts'];
        }

        get pageCount() {
            return Math.ceil(this.products.count / 6);
        }

        fetchProductPage(page: number) {
            this.currentPage = page;
            this.$store.dispatch('modules/shop/fetchProductPage', page);
        }

        created() {
            this.fetchProductPage(1);
        }
    }
</script>
