<template>
    <div class="container mt-5">
        <h1 class="text-center mb-4">Kiến thức sức khỏe cộng đồng</h1>

        <div class="row">
            <div class="col-sm-4 mb-4" v-for="(item, index) in items" :key="index">
                <div class="card h-100">
                    <img :src="item.image" class="card-img-top" :alt="item.title"
                        style="height: 200px; object-fit: cover;" />

                    <div class="card-body">
                        <h5 class="card-title">{{ item.title }}</h5>
                        <p class="card-text">{{ item.content }}</p>
                        <button class="btn btn-info text-white">Xem chi tiết</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Tạo mảng dữ liệu chứa thông tin các bài viết
const items = ref([
    {
        title: '8 loại rau củ quả giàu canxi',
        content: 'Canxi là khoáng chất cần thiết đối với cơ thể người. Có nhiều cách để bổ sung canxi, trong đó bổ sung qua đường ăn uống là cách tốt nhất. Có 8 loại rau củ giàu canxi...',
        image: 'https://qltt.vn/stores/news_dataimages/hanhnth3/122023/12/14/1031_tong_hop_5_loai_trai_cay_giau_canxi_cho_tre_phat_trien_chieu_cao4_e95757acc6.jpg?rt=20231212141032'
    },
    {
        title: 'Các loại gia vị tốt cho sức khỏe',
        content: 'Một số loại gia vị cung cấp nhiều polyphenol chống oxy hóa cao hơn các loại gia vị quen thuộc khác. Với một lượng nhỏ các món ăn đã thêm hương thơm và vị hấp dẫn...',
        image: 'https://cdn.nhathuoclongchau.com.vn/v1/static/bat_mi_cac_loai_gia_vi_tot_cho_suc_khoe_cua_ban_9_d79b402ce7.jpg'
    },
    {
        title: '9 loại đậu bổ dưỡng nên dùng nhiều',
        content: 'Đậu lăng, đậu nành, đậu phộng, đậu Hà Lan giàu chất xơ, protein cùng nhiều vitamin và khoáng chất giúp giảm lượng đường trong máu, tốt cho tim...',
        image: 'https://nongsandungha.com/wp-content/uploads/2023/07/cac-loai-dau-tot-cho-suc-khoe.jpg'
    }
]);
</script>

<style scoped>
/* CSS tùy chỉnh nếu cần */
</style>