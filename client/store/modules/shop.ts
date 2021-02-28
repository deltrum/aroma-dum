import { ActionTree, MutationTree, GetterTree } from 'vuex'

interface Product {
    id: number;
    brand: {
        name: string,
    };
    height: {
        name: string,
    };
    made_in: {
        name: string,
    };
    name: string;
    slug_name: string;
    price: number;
    thumbnail: string;
}

export const state = () => ({
    products: [] as Array<Product>,
    maxProductPrice: 0 as number,
    dataState: false as boolean,
    sortedProducts: [] as Array<Product>,
    filteredProducts: [] as Array<Product>,
    sortBy: {
        price: true as boolean,
        new: true as boolean,
    },
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    getProducts(state): Array<Product> {
        return state.filteredProducts;
    },

    getDataState(state): boolean {
        return state.dataState;
    },

    getSortedProducts(state): Array<Product> {
        return state.sortedProducts;
    },

    getMaxProductPrice(state): number {
        return state.maxProductPrice;
    }
}

export const mutations: MutationTree<RootState> = {
    mProducts(state, newData: Array<Product>): void {
        state.products = newData;
    },

    mDataState(state, newData: boolean): void {
        state.dataState = newData;
    },

    mSortedProducts(state, newData: Array<Product>): void {
        state.sortedProducts = newData;
    },

    mSortByPrice(state, newData: boolean): void {
        state.sortBy.price = newData;
    },

    mSortByNew(state, newData: boolean): void {
        state.sortBy.new = newData;
    },

    mFilteredProducts(state, newData: Array<Product>): void {
        state.filteredProducts = newData;
    },

    mMaxProductPrice(state, newData: number): void {
        state.maxProductPrice = newData;
    },
}

export const actions: ActionTree<RootState, RootState> = {
    async fetchProducts({ commit, dispatch, state }): Promise<void> {
        commit('mDataState', false);
        try {
            const res = await this.$axios.$get(`${this.$axios.defaults.baseURL}/shop/api/products/`)
            commit('mProducts', res);
            dispatch('getHighestPrice', res);
            dispatch('sortByPrice', state.sortBy.price);
            dispatch('sortByNew', state.sortBy.new);
            commit('mDataState', true);
        } catch (error) {
            console.log(error);
        }
    },

    getHighestPrice({ commit }, products: Array<Product>): void {
        let maxPrice: number = Math.max.apply(Math, products.map(function (item) { return item.price; })) + 1;
        commit('mMaxProductPrice', maxPrice);
    },

    sortByPrice(context, sortByState: boolean): void {
        context.commit('mSortByPrice', sortByState);
        var productsToSort: Array<Product> = context.state.filteredProducts.slice();

        if (sortByState === false) {
            productsToSort.sort(function (a: Product, b: Product) {
                return a.price - b.price;
            });
        }

        if (sortByState === true) {
            productsToSort.sort(function (a: Product, b: Product) {
                return b.price - a.price;
            });
        }
        context.commit('mFilteredProducts', productsToSort);
    },

    sortByNew(context, sortByState: boolean): void {
        context.commit('mSortByNew', sortByState);
        var productsToSort: Array<Product> = context.state.filteredProducts.slice();

        if (sortByState === false) {
            productsToSort.sort(function (a: Product, b: Product) {
                return a.id - b.id;
            });
        }

        if (sortByState === true) {
            productsToSort.sort(function (a: Product, b: Product) {
                return b.id - a.id;
            });
        }
        context.commit('mFilteredProducts', productsToSort);
    },


    filterByCategories({ state, commit, dispatch }, categories): void {
        let filteredData = [] as Array<Product>;

        if (categories.brand.length == 5 && categories.height.length == 3 && categories.madeIn.length == 5 && categories.price == [0, state.maxProductPrice]) {
            filteredData = state.products;
            commit('mFilteredProducts', filteredData);
            return;
        }

        filteredData = state.products.filter(function (item) {
            return categories.brand.includes(item.brand.name) && categories.madeIn.includes(item.made_in.name) && categories.height.includes(item.height.name) && categories.price[0] < item.price && categories.price[1] > item.price;
        })

        commit('mFilteredProducts', filteredData);
        dispatch('sortByPrice', state.sortBy.price);
    },
}