export const state = () => ({
    displayMode: null
})

export const mutations = {
    setDisplayMode(state, displayMode){
        state.displayMode = displayMode    
    },
}

export const actions = {
    async changeDisplayMode ({commit}, type) {
        await commit('setDisplayMode', type)
}
}
export const getters = {
    displayMode: s => s.displayMode
}