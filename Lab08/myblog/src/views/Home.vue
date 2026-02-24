<template>
    <div class="home-hero glass">
        <h1>Chào mừng đến với MyBlog</h1>
        <p class="lead">Nơi chia sẻ kiến thức và đam mê lập trình của bạn.</p>
        <div class="hero-actions">
            <router-link :to="{ name: 'BlogList' }" class="btn-primary">Khám phá Blog</router-link>
        </div>
    </div>
</template>

<style scoped>
.home-hero {
    padding: 5rem 3rem;
    text-align: center;
    margin-top: 2rem;
}

h1 {
    font-size: 3.5rem;
    font-weight: 900;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, var(--primary) 0%, #a855f7 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.lead {
    font-size: 1.25rem;
    color: #64748b;
    margin-bottom: 2.5rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.hero-actions {
    display: flex;
    justify-content: center;
    gap: 1rem;
}
</style>
