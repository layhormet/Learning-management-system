<template>
  <div class="popup_overlay" v-if="visible" @click="handleOverlayClick">
    <div class="popup_content" @click.stop>
      <h3>{{ card.title }} - Exercises</h3>
      <ul class="exercises_list">
        <li v-for="(exercise, index) in exercisesList" :key="index">
          Exercise {{ index + 1 }}
        </li>
      </ul>
      <button @click="closePopup">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExercisePopup",
  props: {
    visible: Boolean,
    card: Object,
  },
  computed: {
    exercisesList() {
      return Array.from({ length: this.card.exercises }, (_, i) => i + 1);
    },
  },
  methods: {
    closePopup() {
      this.$emit("close");
    },
    handleOverlayClick() {
      this.closePopup();
    },
  },
};
</script>

<style>
.popup_overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup_content {
  background: #fff;
  padding: 10px;
  gap: 3rem;
  border-radius: 8px;
  width: 900px;
  height: 600px;
  text-align: center;
}

.exercises_list {
  list-style-type: none;
  padding-left: 0;
  margin: 0;
}

button {
  margin-top: 20px;
  width: 100px;
  background: #333;
  color: #fff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.3s ease;
  outline: none;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  &:hover {
    background: #666;
  }
  &:focus {
    outline: none;
  }

}
li{
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
li:hover{
  background: #f5f5f5;
  transition: background 0.3s ease;
  color: orange;
}
</style>
