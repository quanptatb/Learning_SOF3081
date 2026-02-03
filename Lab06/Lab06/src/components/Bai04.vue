<template>
    <div class="container mt-4">
        <h1 class="text-center">Quản lý học sinh</h1>
        <div class="row">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header text-white" :class="isEditing ? 'bg-warning' : 'bg-success'">
                        <h5 class="mb-0">{{ isEditing ? 'Cập nhật học sinh' : 'Thêm học sinh mới' }}</h5>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="submitForm">
                            <div class="mb-3">
                                <label for="name" class="form-label">Họ tên:</label>
                                <input type="text" class="form-control" v-model="student.name" id="name" required
                                    placeholder="Nhập họ tên" />
                            </div>

                            <div class="mb-3">
                                <label for="score" class="form-label">Điểm:</label>
                                <input type="number" max="10" min="0" class="form-control"
                                    v-model.number="student.score" id="score" required placeholder="Nhập điểm (0-10)" />
                            </div>

                            <div class="mb-3">
                                <label for="dob" class="form-label">Ngày sinh:</label>
                                <input type="date" class="form-control" v-model="student.dob" id="dob" required />
                            </div>

                            <button type="submit" class="btn" :class="isEditing ? 'btn-warning' : 'btn-success'">
                                {{ isEditing ? 'Cập nhật' : 'Thêm' }}
                            </button>

                            <button v-if="isEditing" type="button" class="btn btn-secondary ms-2" @click="resetForm">
                                Hủy
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div class="col-md-8">
                <h3>Danh sách học sinh</h3>
                <table class="table table-hover table-bordered">
                    <thead class="table-light">
                        <tr>
                            <th>Họ và tên</th>
                            <th>Điểm</th>
                            <th>Ngày sinh</th>
                            <th class="text-center">Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(stu, index) in students" :key="index">
                            <td>{{ stu.name }}</td>
                            <td>{{ stu.score }}</td>
                            <td>{{ stu.dob }}</td>
                            <td class="text-center">
                                <button class="btn btn-sm btn-warning me-2" @click="editStudent(index)">
                                    Sửa
                                </button>
                                <button class="btn btn-sm btn-danger" @click="deleteStudent(index)">
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// 1. Khởi tạo danh sách học sinh mẫu (Dựa trên Lab6.pdf [cite: 182])
const students = ref([
    { name: 'Nguyễn Chí Hùng', score: 8, dob: '2006-01-01' },
    { name: 'Phạm Thị Lan', score: 9, dob: '2006-05-15' }
]);

// 2. Biến quản lý trạng thái form (Dựa trên Lab6.pdf [cite: 187])
const student = ref({
    name: '',
    score: null,
    dob: ''
});

// Biến theo dõi trạng thái Sửa hay Thêm mới
const isEditing = ref(false);
const editingIndex = ref(null);

// 3. Hàm xử lý gửi form (Thêm hoặc Cập nhật) (Dựa trên Lab6.pdf [cite: 198])
function submitForm() {
    if (isEditing.value) {
        // Logic cập nhật: Ghi đè dữ liệu mới vào vị trí index đang sửa
        // Sử dụng spread operator {...} để copy giá trị thay vì tham chiếu
        students.value[editingIndex.value] = { ...student.value };

        // Reset trạng thái về "Thêm mới"
        isEditing.value = false;
        editingIndex.value = null;
    } else {
        // Logic thêm mới: Đẩy đối tượng mới vào mảng
        students.value.push({ ...student.value });
    }

    // Xóa trắng form sau khi thực hiện xong
    resetForm();
}

// 4. Hàm chuẩn bị dữ liệu để sửa (Dựa trên Lab6.pdf [cite: 212])
function editStudent(index) {
    // Copy dữ liệu từ dòng được chọn lên form
    student.value = { ...students.value[index] };

    // Bật chế độ chỉnh sửa và lưu lại index đang sửa
    isEditing.value = true;
    editingIndex.value = index;
}

// 5. Hàm xóa học sinh (Dựa trên Lab6.pdf [cite: 217])
function deleteStudent(index) {
    if (confirm('Bạn có chắc muốn xóa học sinh này không?')) {
        students.value.splice(index, 1);
    }
}

// 6. Hàm reset form về trạng thái ban đầu (Dựa trên Lab6.pdf [cite: 220])
function resetForm() {
    student.value = {
        name: '',
        score: null,
        dob: ''
    };
    isEditing.value = false;
    editingIndex.value = null;
}
</script>

<style scoped>
.card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>