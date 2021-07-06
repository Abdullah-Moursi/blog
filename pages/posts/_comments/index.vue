<template>
  <div  v-if="post">
    <h2>comments for</h2>
    <h3>
      {{ post.title }}
    </h3>
    {{ post.created_at }} {{ post.updated_at }}
    <div>
      <nuxt-link :to="'/posts'">
        <button>Go back to Posts</button>
      </nuxt-link>
    </div>
  </div>
  <div  v-else> Waiting</div>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style></style>
