<template>
<div>
  <nuxt-child />
  <h1>Posts</h1>
    <div v-for="post in posts" :key="post.id">
      <h3>
        {{post.title}}
        </h3>       
         <p>{{post.body}}</p>
         <nuxt-link :to="`/posts/${post.id}`">
         <h5>Show {{post.user_id}} Comments </h5>
         </nuxt-link>
</div>
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
            console.log(this.posts)

    }
  }
</script>

<style>

</style>