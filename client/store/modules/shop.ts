import { ActionTree, MutationTree } from 'vuex'

interface Product {
    id: number;
    brand: object;
    color: object;
    height: object;
    made_in: object;
    bundle: Array<object>;
    material: Array<object>;
    name: string;
    slug_name: string;
    price: number;
    sold: boolean;
    desc: string;
}

export const state = () => ({
    products: [] as Array<Product>
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
    mChangeProducts(state, newData: Array<Product>) {
        state.products = newData;
    }
}

export const actions: ActionTree<RootState, RootState> = {
    async fetchProductPage() {
        await this.$axios.$get(this.$axios.defaults.baseURL + '/shop/api/products/')
    },
}