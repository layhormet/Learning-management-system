<template>
  <div v-if="isOpen" class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <slot></slot>
      <button class="close" @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "userModal",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  gap: 2rem;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
}
.close{
    margin-top: 10px;
    background-color: #db0707;
    color: #fff;
    border: none;
    border-radius: 30px;
    padding: 5px 10px;
    width: 100px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
}
</style>
