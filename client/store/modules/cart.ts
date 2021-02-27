import { MutationTree, GetterTree } from 'vuex'

interface Product {
    id: number;
    made_in: object;
    bundle: Array<object>;
    name: string;
    slug_name: string;
    price: number;
    desc: string;
    thumbnail: string
}

interface CartProduct {
    product: Product;
    amount: number;
}

export const state = () => ({
    cart: [] as Array<CartProduct>
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    getCart: state => state.cart,
    getCartLength: state => state.cart.length,
}

export const mutations: MutationTree<RootState> = {
    mAddNewProductToCart(state, newItem: CartProduct) {
        let productInCart = state.cart.find(item => {
            return item.product.id == newItem.product.id
        })

        if (productInCart) {
            productInCart.amount += 1
            return
        }

        state.cart.push(newItem)
    },

    mSubtractCartProductAmount(state, existingItem: CartProduct) {
        let productInCart = state.cart.find(item => {
            return item.product.id == existingItem.product.id
        })

        if (productInCart) {
            if (productInCart.amount > 1) {
                productInCart.amount -= 1
            }
        }
    },

    mRemoveFromCart(state, removeItem: CartProduct) {
        const index = state.cart.indexOf(removeItem);
        if (index > -1) {
            state.cart.splice(index, 1);
        }
    }
}
