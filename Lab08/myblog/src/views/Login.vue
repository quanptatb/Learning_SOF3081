<script setup>
import { useRouter } from 'vue-router'
import { setAuthenticated } from '../router' // Import hàm giả lập đăng nhập

const router = useRouter()

const login = () => {
    // 1. Cập nhật biến giả lập thành true
    setAuthenticated(true)
    alert('Đăng nhập thành công!')

    // 2. Programmatic Navigation: Điều hướng sang trang Dashboard
    router.push({ name: 'Dashboard' })
}
</script>

<template>
    <div class="login-container">
        <div class="login-card glass">
            <h1>Đăng nhập</h1>
            <p class="subtitle">Chào mừng bạn quay trở lại! Vui lòng đăng nhập để tiếp tục.</p>

            <div class="login-form">
                <p class="description">Bấm nút bên dưới để đăng nhập vào hệ thống quản lý blog của bạn.</p>
                <button class="btn-primary login-submit" @click="login">Đăng nhập ngay</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
}

.login-card {
    max-width: 450px;
    width: 100%;
    padding: 3rem;
    text-align: center;
}

h1 {
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    color: var(--text-color);
}

.subtitle {
    color: #64748b;
    margin-bottom: 2rem;
    font-size: 0.95rem;
}

.description {
    margin-bottom: 2rem;
    line-height: 1.6;
    color: #475569;
}

.login-submit {
    width: 100%;
    padding: 0.875rem;
    font-size: 1rem;
    box-shadow: 0 4px 6px -1px rgba(79, 70, 229, 0.2);
}

.login-submit:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 15px -3px rgba(79, 70, 229, 0.3);
}
</style>
