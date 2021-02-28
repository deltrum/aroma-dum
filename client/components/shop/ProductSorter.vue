<template>
    <div class="sorter">
        <h5 class="sorter__title">Sort by:</h5>
        <ul class="sorter__list">
            <li class="sorter__item" @click="sortByPrice()">
                <label class="sorter__label">
                    Price
                    <input class="sorter__checkbox" type="checkbox" v-model="productSorterData.price" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20.934" height="11.524" viewBox="0 0 20.934 11.524">
                        <path
                            id="down-chevron"
                            d="M19.846,91.567l-9.379,9.348L1.088,91.567,0,92.659l10.467,10.433L20.934,92.659Z"
                            transform="translate(0 -91.567)"
                        />
                    </svg>
                </label>
            </li>
            <li class="sorter__item" @click="sortByNew()">
                <label class="sorter__label">
                    New
                    <input class="sorter__checkbox" type="checkbox" v-model="productSorterData.new" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20.934" height="11.524" viewBox="0 0 20.934 11.524">
                        <path
                            id="down-chevron"
                            d="M19.846,91.567l-9.379,9.348L1.088,91.567,0,92.659l10.467,10.433L20.934,92.659Z"
                            transform="translate(0 -91.567)"
                        />
                    </svg>
                </label>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" >
    import { Vue, Component } from 'vue-property-decorator';

    @Component({ name: 'ProductSorter' })
    export default class ProductSorter extends Vue {
        productSorterData = {
            price: false as boolean,
            new: false as boolean,
        };

        sortByPrice(): void {
            this.$store.dispatch('modules/shop/sortByPrice', this.productSorterData.price);
        }

        sortByNew(): void {
            this.$store.dispatch('modules/shop/sortByNew', this.productSorterData.new);
        }
    }
</script>
