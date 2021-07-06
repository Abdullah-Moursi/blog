export const state = () => ({
    posts: []
})

export const mutations = {
    SET_VIDEOS (state, posts) {
        state.posts = posts
    }
}