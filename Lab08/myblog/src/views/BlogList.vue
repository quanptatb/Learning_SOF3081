<template>
    <div class="blog-container">
        <div class="blog-header">
            <h1>Danh sách bài viết</h1>
            <p>Những kiến thức mới nhất từ cộng đồng.</p>
        </div>

        <div class="blog-grid">
            <div v-for="i in [1, 2, 3, 4]" :key="i" class="blog-card glass">
                <div class="card-content">
                    <span class="category">Công nghệ</span>
                    <h3>Bài viết {{ i }}</h3>
                    <p>Mô tả ngắn gọn về nội dung bài viết thứ {{ i }} để người đọc hiểu qua nội dung...</p>
                    <router-link :to="'/blog/' + i" class="read-more">Đọc tiếp &rarr;</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.blog-header {
    margin-bottom: 3rem;
}

h1 {
    font-size: 2.5rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
}

.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
}

.blog-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.card-content {
    padding: 2rem;
}

.category {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--primary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 1rem;
}

h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-color);
}

p {
    color: #64748b;
    margin-bottom: 1.5rem;
    line-height: 1.6;
}

.read-more {
    font-weight: 600;
    font-size: 0.9rem;
}
</style>
