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
    dataState: false as boolean,
    maxProductPrice: 0 as number,
    filteredProducts: [] as Array<Product>,
    sortBy: {
        price: '' as string,
        new: '' as string,
    }
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    getProducts(state): Array<Product> {
        return state.filteredProducts;
    },

    getDataState(state): boolean {
        return state.dataState;
    },

    getMaxProductPrice(state): number {
        return state.maxProductPrice;
    }
}

export const mutations: MutationTree<RootState> = {

    // Product & its state
    mProducts(state, newData: Array<Product>): void {
        state.products = newData;
    },

    mDataState(state, newData: boolean): void {
        state.dataState = newData;
    },

    mMaxProductPrice(state, newData: number): void {
        state.maxProductPrice = newData;
    },


    // Sorter
    mSortByPrice(state, newData: string): void {
        state.sortBy.price = newData;
    },

    mSortByNew(state, newData: string): void {
        state.sortBy.new = newData;
    },


    // Filtration
    mFilteredProducts(state, newData: Array<Product>): void {
        state.filteredProducts = newData;
    },

}

export const actions: ActionTree<RootState, RootState> = {
    async fetchProducts({ commit, dispatch, state }): Promise<void> {
        commit('mDataState', false);
        try {
            const res = await this.$axios.$get(`${this.$axios.defaults.baseURL}/shop/api/products/`)
            commit('mProducts', res);
            dispatch('getHighestPrice', res);
            commit('mDataState', true);
        } catch (error) {
            console.log(error);
        }
    },

    getHighestPrice({ commit }, products: Array<Product>): void {
        let maxPrice: number = Math.max.apply(Math, products.map(function (item) { return item.price; })) + 1;
        commit('mMaxProductPrice', maxPrice);
    },


    sortByPrice(context, sortByState: string): void {
        context.commit('mSortByPrice', sortByState);

        var productsToSort: Array<Product> = context.state.filteredProducts.slice();

        if (sortByState === 'lowest') {
            productsToSort.sort(function (a: Product, b: Product) {
                return a.price - b.price;
            });
        }

        if (sortByState === 'highest') {
            productsToSort.sort(function (a: Product, b: Product) {
                return b.price - a.price;
            });
        }
        context.commit('mFilteredProducts', productsToSort);
    },


    sortByNew(context, sortByState: string): void {
        context.commit('mSortByNew', sortByState);


        var productsToSort: Array<Product> = context.state.filteredProducts.slice();

        if (sortByState === 'oldest') {
            productsToSort.sort(function (a: Product, b: Product) {
                return a.id - b.id;
            });
        }

        if (sortByState === 'newest') {
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

        if (state.sortBy.price != '') {
            dispatch('sortByPrice', state.sortBy.price)
        }
        if (state.sortBy.new != '') {
            dispatch('sortByNew', state.sortBy.new)
        }
    },
}