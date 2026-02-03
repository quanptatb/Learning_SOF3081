<template>
  <main>
    <btnupdate></btnupdate>>
    <btninput></btninput>
    <forminput></forminput>
    <div id="app">
      <h1>Ứng dụng Blog nhỏ với Vue.js</h1>
      <CreatePost @add-post="addPost" />
      <hr />
      <PostList :posts="posts" />
    </div>
  </main>
</template>

<script setup>
import btnupdate from './components/Bai01.vue';
import btninput from './components/Bai02.vue';
import forminput from './components/Bai03.vue';
import { ref } from 'vue';
import CreatePost from './components/CreatePost.vue';
import PostList from './components/PostList.vue';
const posts = ref([]);
function addPost(post) {
  posts.value.push(post);
}
</script>

<style>
#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}
</style>