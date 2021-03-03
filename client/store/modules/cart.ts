import { MutationTree, GetterTree } from 'vuex'

interface CartProduct {
    product: {
        id: number;
        name: string;
        price: number;
        thumbnail: string;
    };
    amount: number;
}

export const state = () => ({
    cart: [] as Array<CartProduct>
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    getCart(state): Array<CartProduct> {
        return state.cart;
    },

    getCartCount(state): number {
        return state.cart.length;
    }
}

export const mutations: MutationTree<RootState> = {
    mAddNewProductToCart(state, newItem: CartProduct): void {
        let productInCart = state.cart.find(item => {
            return item.product.id == newItem.product.id
        })

        if (productInCart) {
            productInCart.amount += 1
            return
        }

        state.cart.push(newItem)
    },

    mSubtractCartProductAmount(state, existingItem: CartProduct): void {
        let productInCart = state.cart.find(item => {
            return item.product.id == existingItem.product.id
        })

        if (productInCart) {
            if (productInCart.amount > 1) {
                productInCart.amount -= 1
            }
        }
    },

    mRemoveFromCart(state, removeItem: CartProduct): void {
        const index = state.cart.indexOf(removeItem);
        if (index > -1) {
            state.cart.splice(index, 1);
        }
    }
}
