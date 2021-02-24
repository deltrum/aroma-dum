<template>
    <div class="filter">
        <div class="filter__section">
            <h5 class="filter__section-title">Brand</h5>
            <form class="filter__section-form">
                <label class="filter__section-label" v-for="i in 5" :key="i">
                    <input class="filter__section-checkbox" type="checkbox" />
                    <span class="filter__section-style"></span>
                    Yoshua
                </label>
            </form>
        </div>
        <client-only>
            <div class="filter__section">
                <h5 class="filter__section-title">Price</h5>
                <vue-slider
                    v-model="price"
                    :enable-cross="false"
                    :max="10000"
                ></vue-slider>
            </div>
        </client-only>
        <div class="filter__section">
            <h5 class="filter__section-title">Height</h5>
            <form class="filter__section-form">
                <label class="filter__section-label" v-for="i in 5" :key="i">
                    <input class="filter__section-checkbox" type="checkbox" />
                    <span class="filter__section-style"></span>
                    Tall
                </label>
            </form>
        </div>
        <div class="filter__section">
            <h5 class="filter__section-title">Color</h5>
            <form class="filter__section-form">
                <label class="filter__section-label" v-for="i in 5" :key="i">
                    <input class="filter__section-checkbox" type="checkbox" />
                    <span class="filter__section-style"></span>
                    Red
                </label>
            </form>
        </div>
        <div class="filter__section">
            <h5 class="filter__section-title">Materials</h5>
            <form class="filter__section-form">
                <label class="filter__section-label" v-for="i in 5" :key="i">
                    <input class="filter__section-checkbox" type="checkbox" />
                    <span class="filter__section-style"></span>
                    Wood
                </label>
            </form>
        </div>
    </div>
</template>

<script lang="ts" >
import { Vue, Component } from "vue-property-decorator";

@Component({ name: "ProductFilter" })
export default class ProductFilter extends Vue {
    price = [0, 10000] as Array<number>;
}
</script>
