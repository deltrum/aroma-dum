<template>
    <div class="sorter">
        <h5 class="sorter__title">Sort by:</h5>
        <ul class="sorter__list">
            <li class="sorter__item">
                <label class="sorter__label">
                    Price
                    <svg xmlns="http://www.w3.org/2000/svg" width="20.934" height="11.524" viewBox="0 0 20.934 11.524">
                        <path
                            id="down-chevron"
                            d="M19.846,91.567l-9.379,9.348L1.088,91.567,0,92.659l10.467,10.433L20.934,92.659Z"
                            transform="translate(0 -91.567)"
                        />
                    </svg>
                    <div class="sorter__dropdown">
                        <label class="sorter__dropdown-option">
                            Highest
                            <input
                                class="sorter__dropdown-radio"
                                type="radio"
                                value="highest"
                                v-model="sorterData.price"
                            />
                            <span class="sorter__dropdown-bg"></span>
                        </label>
                        <label class="sorter__dropdown-option">
                            Lowest
                            <input
                                class="sorter__dropdown-radio"
                                type="radio"
                                value="lowest"
                                v-model="sorterData.price"
                            />
                            <span class="sorter__dropdown-bg"></span>
                        </label>
                    </div>
                </label>
            </li>
            <li class="sorter__item">
                <label class="sorter__label">
                    New
                    <svg xmlns="http://www.w3.org/2000/svg" width="20.934" height="11.524" viewBox="0 0 20.934 11.524">
                        <path
                            id="down-chevron"
                            d="M19.846,91.567l-9.379,9.348L1.088,91.567,0,92.659l10.467,10.433L20.934,92.659Z"
                            transform="translate(0 -91.567)"
                        />
                    </svg>
                    <div class="sorter__dropdown">
                        <label class="sorter__dropdown-option">
                            Newest
                            <input
                                class="sorter__dropdown-radio"
                                type="radio"
                                value="newest"
                                v-model="sorterData.new"
                            />
                            <span class="sorter__dropdown-bg"></span>
                        </label>
                        <label class="sorter__dropdown-option">
                            Oldest
                            <input
                                class="sorter__dropdown-radio"
                                type="radio"
                                value="oldest"
                                v-model="sorterData.new"
                            />
                            <span class="sorter__dropdown-bg"></span>
                        </label>
                    </div>
                </label>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" >
    import { Vue, Component, Watch } from 'vue-property-decorator';

    @Component({ name: 'ProductSorter' })
    export default class ProductSorter extends Vue {
        sorterData = {
            price: '' as string,
            new: '' as string,
        };

        @Watch('sorterData.price')
        onSorterDataPriceChange() {
            if (this.sorterData.price != '') {
                this.sortByPrice();
            }
        }

        @Watch('sorterData.new')
        onSorterDataNewChange() {
            if (this.sorterData.new != '') {
                this.sortByNew();
            }
        }

        sortByPrice(): void {
            if (this.sorterData.new) {
                this.sorterData.new = '';
                this.$store.commit('modules/shop/mSortByNew', '');
            }
            this.$store.dispatch('modules/shop/sortByPrice', this.sorterData.price);
        }

        sortByNew(): void {
            if (this.sorterData.price) {
                this.sorterData.price = '';
                this.$store.commit('modules/shop/mSortByPrice', '');
            }
            this.$store.dispatch('modules/shop/sortByNew', this.sorterData.new);
        }
    }
</script>
