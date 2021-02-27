import { ActionTree, MutationTree, GetterTree } from 'vuex'

interface Product {
    id: number;
    brand: object;
    height: object;
    made_in: object;
    name: string;
    slug_name: string;
    price: number;
    thumbnail: string;
}

export const state = () => ({
    products: [] as Array<Product>,
    dataState: false as boolean,
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    getProducts(state): Array<Product> {
        return state.products;
    },

    getDataState(state): boolean {
        return state.dataState;
    }
}

export const mutations: MutationTree<RootState> = {
    mChangeProducts(state, newData: Array<Product>): void {
        state.products = newData;
    },
    mChangeDataState(state, newData: boolean): void {
        state.dataState = newData;
    },
}

export const actions: ActionTree<RootState, RootState> = {
    async fetchProducts({ commit }): Promise<void> {
        commit('mChangeDataState', false);
        try {
            const res = await this.$axios.$get(`${this.$axios.defaults.baseURL}/shop/api/products/`)
            commit('mChangeProducts', res);
            commit('mChangeDataState', true);
        } catch (error) {
            console.log(error);
        }
    },
}