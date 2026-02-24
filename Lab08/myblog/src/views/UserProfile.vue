<template>
    <div class="profile-page">
        <div class="profile-header">
            <h1>Hồ sơ cá nhân</h1>
            <p>Quản lý thông tin và cài đặt tài khoản của bạn.</p>
        </div>

        <div class="profile-content glass">
            <nav class="profile-tabs">
                <router-link to="/profile/info" class="tab-link">
                    <span class="icon">👤</span> Thông tin cơ bản
                </router-link>
                <router-link to="/profile/settings" class="tab-link">
                    <span class="icon">⚙️</span> Cài đặt
                </router-link>
            </nav>

            <div class="tab-content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style scoped>
.profile-page {
    max-width: 800px;
    margin: 0 auto;
}

.profile-header {
    margin-bottom: 2rem;
}

h1 {
    font-size: 2.25rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
}

.profile-header p {
    color: #64748b;
}

.profile-content {
    overflow: hidden;
}

.profile-tabs {
    display: flex;
    background: rgba(0, 0, 0, 0.02);
    border-bottom: 1px solid var(--glass-border);
}

.tab-link {
    flex: 1;
    padding: 1.25rem;
    text-align: center;
    color: #64748b;
    font-weight: 600;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.tab-link:hover {
    background: rgba(79, 70, 229, 0.05);
    color: var(--primary);
}

.tab-link.router-link-active {
    background: white;
    color: var(--primary);
    border-bottom: 2px solid var(--primary);
}

.tab-content {
    padding: 2.5rem;
}

.icon {
    font-size: 1.1rem;
}
</style>
