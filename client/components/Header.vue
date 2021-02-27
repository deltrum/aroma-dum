<template>
    <header class="header">
        <div class="header__row">
            <div class="container">
                <div class="header__row-inner">
                    <ul class="header__list">
                        <li class="header__item">
                            <nuxt-link class="header__link underline" :class="{ 'underline--active': $route.name === 'index' }" :to="{ name: 'index' }"> Home </nuxt-link>
                        </li>
                        <li class="header__item">
                            <nuxt-link class="header__link underline" :class="{ 'underline--active': $route.name === 'cart' }" :to="{ name: 'cart' }"> Cart </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="header__row">
            <div class="container">
                <div class="header__row-inner">
                    <div class="header__contact">+1437 886 25 88</div>
                    <nuxt-link class="header__brand-logo" :to="{ name: 'index' }">
                        <img class="header__brand-logo-img" src="@/assets/images/brand-logo.png" />
                    </nuxt-link>
                    <nuxt-link class="header__cart-btn" :to="{ name: 'cart' }">
                        <span>{{ cartCount }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40.135" height="35.804" viewBox="0 0 40.135 35.804">
                            <path
                                id="shopping-cart"
                                d="M11.6,55.178a1.321,1.321,0,0,1,0-2.642c4.873.017,17.727,0,22.755.008a2.923,2.923,0,0,0,2.861-2.276L40.073,37.9a2.376,2.376,0,0,0-2.306-2.911c-2.023,0-19.193-.078-27.988-.113L8.386,29.708a2.847,2.847,0,0,0-2.743-2.1H1.176a1.176,1.176,0,1,0,0,2.353H5.642a.49.49,0,0,1,.472.36l5.354,19.864a3.672,3.672,0,0,0-3.54,3.734,3.691,3.691,0,0,0,3.673,3.61h1.715a4.118,4.118,0,1,0,7.439,0h7.429a4.118,4.118,0,1,0,7.409-.062,1.176,1.176,0,0,0-.375-2.291ZM18.8,59.3a1.765,1.765,0,1,1-1.766-1.765h0A1.767,1.767,0,0,1,18.8,59.3ZM31.9,61.06a1.765,1.765,0,0,1-.029-3.529h.057A1.765,1.765,0,0,1,31.9,61.06Zm5.871-23.7a.019.019,0,0,1,0,.02l-1.2,5.21H32.5l.694-5.257,4.561.018a.019.019,0,0,1,.018.009ZM25.647,50.191V44.938H29.82l-.693,5.254Zm-5.834,0-.7-5.254h4.18v5.254Zm-5.416,0h0a.637.637,0,0,1-.614-.469l-1.29-4.785h4.25l.7,5.254Zm4.4-7.606-.708-5.317,5.2.021v5.3Zm6.846,0V37.3l5.178.021-.695,5.266Zm-9.928-5.327.709,5.327H11.856l-1.442-5.348ZM34.357,50.191H31.5l.693-5.254h3.841l-1.109,4.8A.581.581,0,0,1,34.357,50.191Z"
                                transform="translate(0 -27.609)"
                            />
                        </svg>
                    </nuxt-link>
                    <MobileNav />
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts" >
    import { Vue, Component } from 'vue-property-decorator';
    import MobileNav from '@/components/MobileNav.vue';

    @Component({ name: 'Header', components: { MobileNav } })
    export default class Header extends Vue {
        get cartCount(): number {
            return this.$store.getters['modules/cart/getCartCount'];
        }
    }
</script>
