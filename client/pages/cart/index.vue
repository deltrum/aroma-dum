<template>
    <main class="cart main">
        <div class="container">
            <div class="cart__inner">
                <h4 class="cart__title">Cart</h4>
                <div class="cart__products">
                    <div class="cart__list">
                        <article class="cart__item" v-for="i in 5" :key="i">
                            <div class="cart__item-img">
                                <nuxt-link
                                    class="cart__item-img-img"
                                    style="background-image: url('https://s3-alpha-sig.figma.com/img/e501/21b1/2b7751d0ecf8834b2bd6e808d598fe7d?Expires=1615161600&Signature=G1Vx1aNBB8fF5LEeM5rc4qSSt0AHygS1K0m1NQ0XTSd9IXWO5CbVGgegCzWbCximW6aEkJxX8tNKg95WgiA9sF8e8y8rChvJyK8E6b1lLRONqTlXlxnJVkkc4Gvx05PBenJINF1L~KNatzycIPG272qFR8A8my~QKeXuflhGfgq1o6m2gqhs4fOtiRjAQTxZmrhlXoBCsbAnYdAtbzlEIbk0tdmR6qE9wUM8i~92ucC5PvZfxkzgELv3W5~VubNo5t5J2tOqr0BtlwePcYBy~dD17hcb4Gj494DS3GtI2UPFoeoZP9x6E1kmsUc8zby-5HAryP-0twPqSkFnj3Zjwg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA')"
                                    to="#"
                                ></nuxt-link>
                            </div>
                            <div class="cart__item-content">
                                <h5 class="cart__item-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu lobortis tortor.</h5>
                            </div>
                            <div class="cart__item-amount">
                                <button class="cart__item-amount-btn">
                                    <svg width="9" height="3" viewBox="0 0 9 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.49873 2.5V0.874999H0.873731V2.5H8.49873Z" fill="black" />
                                    </svg>
                                </button>
                                <span class="cart__item-amount-number">0</span>
                                <button class="cart__item-amount-btn">
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.703 6.22245V4.62244H7.05303V0.222445H5.40303V4.62244H0.753027V6.22245H5.40303V10.6474H7.02803V6.22245H11.703Z" fill="black" />
                                    </svg>
                                </button>
                            </div>
                            <div class="cart__item-price">8000 $</div>
                            <button class="cart__item-delete-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30.585" height="30.585" viewBox="0 0 30.585 30.585">
                                    <path id="close" d="M18.095,15.429,30,3.519a1.981,1.981,0,1,0-2.8-2.8l-11.91,11.91L3.383.717a1.981,1.981,0,0,0-2.8,2.8l11.909,11.91L.581,27.338a1.981,1.981,0,1,0,2.8,2.8L15.292,18.23,27.2,30.14a1.981,1.981,0,1,0,2.8-2.8Zm0,0" transform="translate(0 -0.136)" />
                                </svg>
                            </button>
                        </article>
                    </div>
                </div>
                <div class="cart__final">
                    <div class="cart__final-amount">Amount of items: <strong>34</strong></div>
                    <div class="cart__final-price">Final price: <strong>2879 $</strong></div>
                    <nuxt-link class="cart__final-btn" to="#">Order</nuxt-link>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts" >
    import { Vue, Component } from 'vue-property-decorator'

    @Component({ name: 'Cart' })
    export default class Cart extends Vue {}
</script>