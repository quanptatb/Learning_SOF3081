<template>
    <div>
        <h2>Danh sách bài viết</h2>
        <div v-for="(post, index) in posts" :key="index" class="post" :class="{ 'highlighted': post.title.length > 20 }"
            :style="{ backgroundColor: post.backgroundColor, color: post.textColor }">

            <h3 class="text-success">{{ post.title }}</h3>
            <h4 class="text-danger">{{ post.author }}</h4>
            <p>{{ post.content }}</p>
        </div>
    </div>
</template>

<script setup>
// Khai báo props để nhận dữ liệu từ App.vue 
const props = defineProps({
    posts: {
        type: Array,
        required: true
    }
});
</script>

<style scoped>
.post {
    padding: 20px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 10px;
}

.highlighted {
    border: 2px solid #2ecc71;
    /* Nổi bật nếu tiêu đề dài hơn 20 ký tự  */
}

.text-success {
    color: #27ae60;
}

.text-danger {
    color: #e74c3c;
}
</style>