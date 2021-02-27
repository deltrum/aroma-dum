<template>
    <div class="mobile-nav">
        <button class="mobile-nav__hamburger" @click="toggleMobileNav()">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </button>
        <div class="mobile-nav__menu">
            <div class="mobile-nav__menu-wrapper">
                <ul class="mobile-nav__list">
                    <li class="mobile-nav__item">
                        <nuxt-link class="mobile-nav__link underline" :class="{ 'underline--active': $route.name === 'index' }" :to="{ name: 'index' }"> Home </nuxt-link>
                    </li>
                </ul>
                <ul class="mobile-nav__list">
                    <li class="mobile-nav__item">
                        <nuxt-link class="mobile-nav__link underline" to="#"> About us </nuxt-link>
                    </li>
                    <li class="mobile-nav__item">
                        <nuxt-link class="mobile-nav__link underline" to="#"> Delivery </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts" >
    import { Vue, Component } from 'vue-property-decorator';

    @Component({ name: 'MobileNav' })
    export default class MobileNav extends Vue {
        toggleMobileNav() {
            let hamburgerBtn = document.getElementsByClassName('mobile-nav__hamburger')[0];
            let mobileNav = document.getElementsByClassName('mobile-nav__menu')[0];

            hamburgerBtn.classList.toggle('mobile-nav__hamburger--active');
            mobileNav.classList.toggle('mobile-nav__menu--open');
        }
    }
</script>
