export const state = () => ({
    news: []
})

export const getters = {
   news: s => s.news
}

export const mutations = {
    setNews(state, news){
        state.news = news   
    }
}

export const actions = {
    async fetch ({commit}) {
        try{
            const news = await this.$axios.$get('api/user/getNews')
            commit('setNews', news)
        } catch {
            console.error('НЕ ПРОШЕЛ ЗАПРОС')
        }
    }
}
