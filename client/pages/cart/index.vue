<template>
    <main class="cart main">
        <div class="container">
            <div class="cart__inner">
                <h4 class="cart__title">Cart</h4>
                <div class="cart__products">
                    <div class="cart__empty" v-if="!cartCount">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40.135" height="35.804" viewBox="0 0 40.135 35.804">
                            <path
                                id="shopping-cart"
                                d="M11.6,55.178a1.321,1.321,0,0,1,0-2.642c4.873.017,17.727,0,22.755.008a2.923,2.923,0,0,0,2.861-2.276L40.073,37.9a2.376,2.376,0,0,0-2.306-2.911c-2.023,0-19.193-.078-27.988-.113L8.386,29.708a2.847,2.847,0,0,0-2.743-2.1H1.176a1.176,1.176,0,1,0,0,2.353H5.642a.49.49,0,0,1,.472.36l5.354,19.864a3.672,3.672,0,0,0-3.54,3.734,3.691,3.691,0,0,0,3.673,3.61h1.715a4.118,4.118,0,1,0,7.439,0h7.429a4.118,4.118,0,1,0,7.409-.062,1.176,1.176,0,0,0-.375-2.291ZM18.8,59.3a1.765,1.765,0,1,1-1.766-1.765h0A1.767,1.767,0,0,1,18.8,59.3ZM31.9,61.06a1.765,1.765,0,0,1-.029-3.529h.057A1.765,1.765,0,0,1,31.9,61.06Zm5.871-23.7a.019.019,0,0,1,0,.02l-1.2,5.21H32.5l.694-5.257,4.561.018a.019.019,0,0,1,.018.009ZM25.647,50.191V44.938H29.82l-.693,5.254Zm-5.834,0-.7-5.254h4.18v5.254Zm-5.416,0h0a.637.637,0,0,1-.614-.469l-1.29-4.785h4.25l.7,5.254Zm4.4-7.606-.708-5.317,5.2.021v5.3Zm6.846,0V37.3l5.178.021-.695,5.266Zm-9.928-5.327.709,5.327H11.856l-1.442-5.348ZM34.357,50.191H31.5l.693-5.254h3.841l-1.109,4.8A.581.581,0,0,1,34.357,50.191Z"
                                transform="translate(0 -27.609)"
                            />
                        </svg>
                        <h4 class="cart__empty-title">You haven't added anything to your cart.</h4>
                    </div>
                    <div class="cart__list" v-if="cartCount">
                        <article class="cart__item" v-for="product in cartProducts" :key="product.id">
                            <div class="cart__item-img">
                                <nuxt-link
                                    class="cart__item-img-img"
                                    :style="{ backgroundImage: 'url(' + product.product.thumbnail + ')' }"
                                    to="#"
                                ></nuxt-link>
                            </div>
                            <div class="cart__item-content">
                                <h5 class="cart__item-title">{{ product.product.name }}</h5>
                            </div>
                            <div class="cart__item-amount">
                                <button class="cart__item-amount-btn" @click="subtractCartProductAmount(product)">
                                    <svg width="9" height="3" viewBox="0 0 9 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.49873 2.5V0.874999H0.873731V2.5H8.49873Z" fill="black" />
                                    </svg>
                                </button>
                                <span class="cart__item-amount-number">{{ product.amount }}</span>
                                <button class="cart__item-amount-btn" @click="addCartProductAmount(product)">
                                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.703 6.22245V4.62244H7.05303V0.222445H5.40303V4.62244H0.753027V6.22245H5.40303V10.6474H7.02803V6.22245H11.703Z"
                                            fill="black"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div class="cart__item-price">{{ product.product.price }} $ / 1</div>
                            <button class="cart__item-delete-btn" @click="removeFromCart(product)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30.585" height="30.585" viewBox="0 0 30.585 30.585">
                                    <path
                                        id="close"
                                        d="M18.095,15.429,30,3.519a1.981,1.981,0,1,0-2.8-2.8l-11.91,11.91L3.383.717a1.981,1.981,0,0,0-2.8,2.8l11.909,11.91L.581,27.338a1.981,1.981,0,1,0,2.8,2.8L15.292,18.23,27.2,30.14a1.981,1.981,0,1,0,2.8-2.8Zm0,0"
                                        transform="translate(0 -0.136)"
                                    />
                                </svg>
                            </button>
                        </article>
                    </div>
                </div>
                <div class="cart__final">
                    <div class="cart__final-amount">
                        Amount of items: <strong>{{ cartLength }}</strong>
                    </div>
                    <div class="cart__final-price">
                        Final price: <strong>{{ finalPrice }} $</strong>
                    </div>
                    <nuxt-link class="cart__final-btn" to="#">Order</nuxt-link>
                </div>
            </div>
        </div>
    </main>
</template>

<script lang="ts" >
    import { Vue, Component } from 'vue-property-decorator';

    interface CartProduct {
        product: {
            id: number;
            name: string;
            price: number;
            thumbnail: string;
        };
        amount: number;
    }

    @Component({ name: 'Cart' })
    export default class Cart extends Vue {
        get cartProducts(): Array<CartProduct> {
            return this.$store.getters['modules/cart/getCart'];
        }

        get cartCount(): number {
            return this.$store.getters['modules/cart/getCartCount'];
        }

        get finalPrice(): number {
            let finalPrice = 0;
            for (const item of this.cartProducts) {
                finalPrice += item.product.price * item.amount;
            }

            return finalPrice;
        }

        addCartProductAmount(item: CartProduct): void {
            this.$store.commit('modules/cart/mAddNewProductToCart', item);
        }

        subtractCartProductAmount(item: CartProduct): void {
            this.$store.commit('modules/cart/mSubtractCartProductAmount', item);
        }

        removeFromCart(item: CartProduct): void {
            this.$store.commit('modules/cart/mRemoveFromCart', item);
        }
    }
</script>