<template>
  <div>
      <nuxt-child :post="post" />
  </div>
</template>

<script>
export default {
       data() {
      return {
        posts: []
      }
    },
    async fetch() {
     const response = await fetch(
        'https://gorest.co.in/public-api/posts'
      ).then(res => res.json())
            this.posts = response.data

    },
    computed: {
      post() {
        return this.posts.find(p => p.id == this.$route.params.comments)
      }
    }

}
</script>

<style>

</style>