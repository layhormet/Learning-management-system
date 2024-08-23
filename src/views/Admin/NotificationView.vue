<template>
  <NavAdmin />
  <div class="notification_container">
    <SidebarView />
    <div class="noti_content">
      <div class="top_content">
        <h2>ALL NOTIFICATIONS</h2>
        <div class="search_box">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search for notifications..."
          />
          <i class="fa fa-search"></i>
        </div>
      </div>
      <div class="main_content">
        <div class="cards">
          <div
            v-for="notification in filteredNotifications"
            :key="notification.id"
            class="card"
          >
            <img :src="notification.image" alt="notification" />
            <h5>{{ notification.author }}</h5>
            <p>{{ notification.learners }} Learners</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavAdmin from "../../components/Admin/NavBar.vue";
import SidebarView from "../../components/Admin/SideBar.vue";

export default {
  name: "NotificationView",
  components: {
    NavAdmin,
    SidebarView,
  },
  data() {
    return {
      searchQuery: "",
      notifications: [
        { id: 1, author: "By admin", learners: 20, image: require("@/assets/admin/logo.png") },
        { id: 2, author: "By admin", learners: 20, image: require("@/assets/admin/Js.png") },
        { id: 3, author: "By admin", learners: 20, image: require("@/assets/home.png") },
        { id: 4, author: "By admin", learners: 20, image: require("@/assets/admin/react.png") },
        { id: 5, author: "By admin", learners: 20, image: require("@/assets/admin/Js.png") },
        { id: 6, author: "By admin", learners: 20, image: require("@/assets/home.png") },
        { id: 7, author: "By admin", learners: 20, image: require("@/assets/admin/php.png") },
        { id: 8, author: "By admin", learners: 20, image: require("@/assets/admin/react.png") },
      ],
    };
  },
  computed: {
    filteredNotifications() {
      return this.notifications.filter(notification => {
        const query = this.searchQuery.toLowerCase();
        return (
          notification.author.toLowerCase().includes(query) ||
          notification.learners.toString().includes(query)
        );
      });
    },
  },
};
</script>

<style scoped>
.notification_container {
  display: flex;
  height: 100%;
  width: 100%;
  margin-top: 40px;
  padding-top: 50px;
  background-color: #f0f0f0;
}
.noti_content {
  display: flex;
  flex-direction: column;
  width: 78%;
  margin-left: 320px;
  margin-top: 50px;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 20px;
  height: 625px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.top_content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #cccccc;
}
.search_box {
  margin-right: 20px;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 40px;
  background-color: #e0e0e0;
  width: 500px;
  padding: 10px;
}

.search_box input {
  color: #001f54;
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  padding-left: 10px;
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
  transform: scale(1.2);
}
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  width: 100%;
  height: 500px;
  padding: 10px;
  overflow-y: auto;
}

.cards::-webkit-scrollbar {
  display: none;
}
.card {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-repeat: no-repeat;
  width: 265px;
  height: 250px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.56);
}
.card img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px;
}
.card p {
  margin-top: 10px;
  width: 60%;
  padding: 5px;
  color: white;
  border-radius: 30px;
  background-color: #cb510d;
}
.card p:hover {
  background-color: #cb510d;
  color: white;
  transition: background-color 0.3s ease-in-out;
  transition: color 0.3s ease-in-out;
  transition: box-shadow 0.3s ease-in-out;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
  transition: transform 0.3s ease-in-out;
  transform: translateY(-2px);
  transition: opacity 0.3s ease-in-out;
  opacity: 0.8;
  transition: filter 0.3s ease-in-out;
  filter: brightness(0.9);
}
</style>
