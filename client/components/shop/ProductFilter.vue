<template>
    <div class="filter">
        <div class="filter__section">
            <h5 class="filter__section-title">Brand</h5>
            <form class="filter__section-form">
                <label class="filter__section-label">
                    <input class="filter__section-checkbox" type="checkbox" value="Khalil Mamoon" v-model="productFilterData.brand" />
                    <span class="filter__section-style"></span>
                    Khalil Mamoon
                </label>
                <label class="filter__section-label">
                    <input class="filter__section-checkbox" type="checkbox" value="Fumari" v-model="productFilterData.brand" />
                    <span class="filter__section-style"></span>
                    Fumari
                </label>
                <label class="filter__section-label">
                    <input class="filter__section-checkbox" type="checkbox" value="Starbuzz" v-model="productFilterData.brand" />
                    <span class="filter__section-style"></span>
                    Starbuzz
                </label>
                <label class="filter__section-label">
                    <input class="filter__section-checkbox" type="checkbox" value="Yahya" v-model="productFilterData.brand" />
                    <span class="filter__section-style"></span>
                    Yahya
                </label>
            </form>
        </div>
        <client-only>
            <div class="filter__section">
                <h5 class="filter__section-title">Price</h5>
                <form class="filter__section-form">
                    <div class="filter__section-group">
                        <input type="text" class="filter__section-input" v-model="productFilterData.price[0]" />
                        <input type="text" class="filter__section-input" v-model="productFilterData.price[1]" />
                    </div>
                    <vue-slider v-model="productFilterData.price" :enable-cross="false" :max="10000"></vue-slider>
                </form>
            </div>
        </client-only>
        <div class="filter__section">
            <h5 class="filter__section-title">Height</h5>
            <form class="filter__section-form">
                <label class="filter__section-label">
                    <input class="filter__section-checkbox" type="checkbox" value="Tall" v-model="productFilterData.height" />
                    <span class="filter__section-style"></span>
                    Tall
                </label>
                <label class="filter__section-label">
                    <input class="filter__section-checkbox" type="checkbox" value="Medium" v-model="productFilterData.height" />
                    <span class="filter__section-style"></span>
                    Medium
                </label>
                <label class="filter__section-label">
                    <input class="filter__section-checkbox" type="checkbox" value="Short" v-model="productFilterData.height" />
                    <span class="filter__section-style"></span>
                    Short
                </label>
            </form>
        </div>
        <div class="filter__section">
            <h5 class="filter__section-title">Made In</h5>
            <form class="filter__section-form">
                <label class="filter__section-label">
                    <input class="filter__section-checkbox" type="checkbox" value="Iran" v-model="productFilterData.madeIn" />
                    <span class="filter__section-style"></span>
                    Iran
                </label>
                <label class="filter__section-label">
                    <input class="filter__section-checkbox" type="checkbox" value="USA" v-model="productFilterData.madeIn" />
                    <span class="filter__section-style"></span>
                    USA
                </label>
                <label class="filter__section-label">
                    <input class="filter__section-checkbox" type="checkbox" value="Ukraine" v-model="productFilterData.madeIn" />
                    <span class="filter__section-style"></span>
                    Ukraine
                </label>
                <label class="filter__section-label">
                    <input class="filter__section-checkbox" type="checkbox" value="Turkey" v-model="productFilterData.madeIn" />
                    <span class="filter__section-style"></span>
                    Turkey
                </label>
                <label class="filter__section-label">
                    <input class="filter__section-checkbox" type="checkbox" value="Egypt" v-model="productFilterData.madeIn" />
                    <span class="filter__section-style"></span>
                    Egypt
                </label>
            </form>
        </div>

        <div class="filter__section">
            <button class="filter__reset-btn primary-btn" @click="resetProductFilterData()">Reset filter</button>
        </div>
    </div>
</template>

<script lang="ts" >
    import { Vue, Component } from 'vue-property-decorator';

    @Component({ name: 'ProductFilter' })
    export default class ProductFilter extends Vue {
        productFilterData = {
            price: [0, 10000] as Array<number>,
            brand: [] as Array<string>,
            height: [] as Array<string>,
            madeIn: [] as Array<string>,
        };

        resetProductFilterData() {
            this.productFilterData = {
                price: [0, 10000],
                brand: [],
                height: [],
                madeIn: [],
            };
        }
    }
</script>
