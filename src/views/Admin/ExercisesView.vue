<template>
  <NavAdmin />
  <div class="exercise_container">
    <SidebarView />
    <div class="exercise_content">
      <div class="top_container">
        <h2>Exercise List</h2>
        <div class="search_box">
          <input
            type="text"
            placeholder="Search exercises..."
            v-model="searchQuery"
          />
          <i class="fa fa-search"></i>
        </div>
        <div class="add_button">
          <i class="fa fa-plus"></i>
          <span @click="addExercise">Add Exercise</span>
        </div>
      </div>
      <div class="bot_container">
        <div
          class="card"
          v-for="(card, index) in filteredCards"
          :key="index"
          :style="{ backgroundColor: logoColor(card.logo) }"
        >
          <div class="card_top">
            <div class="logo">
              <img :src="card.logo" :alt="card.title" />
            </div>
            <h4 class="title">{{ card.title }}</h4>
            <i class="fa fa-list"></i>
          </div>
          <div class="card_body">
            <span>Exercise: {{ card.exercises }}</span>
            <i class="fa fa-folder" @click="openPopup(card)"></i>
          </div>
        </div>
      </div>
    </div>
    <ExercisePopup
      :visible="isPopupVisible"
      :card="selectedCard"
      @close="isPopupVisible = false"
    />
  </div>
</template>

<script>
import NavAdmin from "../../components/Admin/NavBar.vue";
import SidebarView from "../../components/Admin/SideBar.vue";
import ExercisePopup from "../../components/Admin/ExercisePopup.vue"; // Import the Popup Component

// Import the images
import phpLogo from "@/assets/admin/php.png";
import cppLogo from "@/assets/admin/c_plus2.png";
import csharpLogo from "@/assets/admin/c_shap.png";
import jsLogo from "@/assets/admin/javascript.png";
import htmlLogo from "@/assets/admin/html.png";
import reactLogo from "@/assets/admin/react.png";

export default {
  name: "ExercisesView",
  components: {
    NavAdmin,
    SidebarView,
    ExercisePopup, // Register the Popup Component
  },
  data() {
    return {
      searchQuery: "",
      isPopupVisible: false,
      selectedCard: null,
      cards: [
        { logo: phpLogo, title: "PHP", exercises: 7 },
        { logo: cppLogo, title: "C++", exercises: 7 },
        { logo: csharpLogo, title: "C#", exercises: 7 },
        { logo: jsLogo, title: "JAVASCRIPT", exercises: 7 },
        { logo: htmlLogo, title: "HTML", exercises: 7 },
        { logo: reactLogo, title: "REACT JS", exercises: 7 },
      ],
    };
  },
  computed: {
    filteredCards() {
      return this.cards.filter((card) =>
        card.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    logoColor(logoImg) {
      switch (logoImg) {
        case phpLogo:
          return "#4F5B93";
        case cppLogo:
          return "#659AD2";
        case csharpLogo:
          return "#9B4993";
        case jsLogo:
          return "#F7DF1E";
        case htmlLogo:
          return "#E44D26";
        case reactLogo:
          return "#61DAFB";
        default:
          return "#114172";
      }
    },
    openPopup(card) {
      this.selectedCard = card;
      this.isPopupVisible = true;
    },
  },
};
</script>


<style scoped>
.exercise_container {
  display: flex;
  height: 100%;
  width: 100%;
  margin-top: 60px;
  padding-top: 50px;
  background-color: #e0e0e0;
}

.exercise_content {
  display: flex;
  flex-direction: column;
  width: 78%;
  margin-left: 320px;
  margin-top: 50px;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 20px;
  height: 100%;
  background-color: #ffff;
}

.top_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search_box {
  margin-right: 20px;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 40px;
  background-color: #ccc;
  width: 500px;
  padding: 10px;
}

.search_box input {
  color: #001f54;
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
}

.search_box i {
  position: absolute;
  right: 10px;
  font-size: 18px;
  cursor: pointer;
  color: #001f54;
}

.search_box i:hover {
  color: #0a1cdf;
  transition: color 0.3s ease;
  scale: 1.2;
}

.add_button {
  color: #ffffff;
  background-color: #f6520b;
  border: none;
  width: 200px;
  gap: 1rem;
  border-radius: 40px;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  display: flex;
  cursor: pointer;
}

.add_button:hover {
  background-color: #bcad05;
  transition: background-color 0.3s ease;
}

.add_button span {
  color: #ffffff;
  border: none;
  outline: none;
  background-color: transparent;
  border-radius: 40px;
  display: flex;
  cursor: pointer;
}

.bot_container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 50px;
  gap: 1.5rem;
  height: 470px;
  width: 100%;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 350px;
  height: 200px;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 20px;
  color: white;
  background-color: #114172;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
  cursor: pointer;
}

.card:hover {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s ease;
}

.card_top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-bottom: 10px;
  font-size: 16px;
}

.logo {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo img {
  width: 90%;
  height: 90%;
  object-fit: cover;
}

.card_top > i {
  font-size: 30px;
}

.card_body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding-top: 10px;
  height: 40px;
  font-size: 20px;
}

.card_body span {
  margin-right: 10px;
}

.card_body i:hover {
  color: #ec7906;
  transition: color 0.3s ease;
  scale: 1.2;
}
</style>
