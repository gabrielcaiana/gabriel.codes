export const state = () => ({
  categories: [],
})

export const getters = {
  getCategories: (state) => state.categories,
}

export const mutations = {
  SET_CATEGORIES: (state, payload) => (state.categories = payload)
}