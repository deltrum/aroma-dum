<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__inner">
                <div class="footer__column">
                    <h5 class="footer__column-title">Navigation:</h5>
                    <ul class="footer__list">
                        <li class="footer__item">
                            <nuxt-link
                                class="footer__link underline"
                                :to="{ name: 'index' }"
                                >Home</nuxt-link
                            >
                        </li>
                        <li class="footer__item">
                            <nuxt-link
                                class="footer__link underline"
                                :to="{ name: 'shop' }"
                                >Shop</nuxt-link
                            >
                        </li>
                        <li class="footer__item">
                            <nuxt-link
                                class="footer__link underline"
                                :to="{ name: 'contact' }"
                                >Contact</nuxt-link
                            >
                        </li>
                    </ul>
                </div>
                <div class="footer__column">
                    <nuxt-link
                        class="footer__brand-logo"
                        :to="{ name: 'index' }"
                    >
                        <img
                            class="footer__brand-logo-img"
                            src="@/assets/images/brand-logo-w.png"
                        />
                    </nuxt-link>
                    <p class="copyright">© All rights reserved 2021</p>
                </div>
                <div class="footer__column">
                    <h5 class="footer__column-title">Contact us:</h5>
                    <ul class="footer__list">
                        <li class="footer__item">
                            <a
                                class="footer__link underline"
                                href="tel:+1437 886 25 88"
                                >+1437 886 25 88</a
                            >
                        </li>
                        <li class="footer__item">
                            <a
                                class="footer__link underline"
                                href="tel:+1437 886 25 88"
                                >+1437 776 34 26</a
                            >
                        </li>
                        <li class="footer__item">
                            <a
                                class="footer__link underline"
                                href="mailto:aromadum@gmail.com"
                                >aromadum@gmail.com</a
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" >
import { Vue, Component } from "vue-property-decorator";

@Component({ name: "Footer" })
export default class Footer extends Vue {}
</script>
