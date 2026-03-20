<script>
export default {
  props: {
    contact: { type: Object, required: true },
  },
};
</script>
<template>
  <div class="p-1">
    <strong>Điện thoại:</strong>
    {{ contact.phone }}
  </div>
  <div class="p-1">
    <strong>Liên hệ yêu thích:&nbsp;</strong>
    <i v-if="contact.favorite" class="fas fa-check"></i>
    <i v-else class="fas fa-times"></i>
  </div>

  <div class="mt-3 d-flex justify-content-around">
    <button class="btn btn-sm btn-primary" @click="refreshList()">
      <i class="fas fa-redo"></i> Làm mới
    </button>
    <button class="btn btn-sm btn-success" @click="goToAddContact">
      <i class="fas fa-plus"></i> Thêm
    </button>
    <button class="btn btn-sm btn-danger" @click="removeAllContacts">
      <i class="fas fa-trash"></i> Xóa
    </button>
  </div>
</template>
