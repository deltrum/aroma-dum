import { ActionTree, MutationTree, GetterTree } from 'vuex'

interface Product {
    id: number;
    brand: object;
    height: object;
    made_in: object;
    bundle: Array<object>;
    name: string;
    slug_name: string;
    price: number;
    sold: boolean;
    desc: string;
}

export const state = () => ({
    products: [] as Array<Product>,
    loadingState: true as boolean,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    getProducts: state => state.products,
    getLoadingState: state => state.loadingState,

}

export const mutations: MutationTree<RootState> = {
    mChangeProducts(state, newData: Array<Product>) {
        state.products = newData;
    },

    mChangeLoadingState(state, newState: boolean) {
        state.loadingState = newState;
    }

}

export const actions: ActionTree<RootState, RootState> = {
    async fetchProductPage({ commit }, page: number) {
        commit('mChangeLoadingState', true);
        try {
            const res = await this.$axios.$get(`${this.$axios.defaults.baseURL}/shop/api/products/?page=${page}`)
            commit('mChangeProducts', res);
            commit('mChangeLoadingState', false);
        } catch (error) {
            console.log(error);
        }
    },
}