<template>
  <NavAdmin />
  <div class="dashboard">
    <div class="dash_container">
      <SidebarView />
      <div class="dashboard_main">
        <div class="main_left">
          <div class="main_left_top">
            <h2>HELLO, LEARNERS!</h2>
            <p>Ratanak Khoeurn</p>
          </div>
          <div class="main_left_mid">
            <FullCalendar :options="calendarOptions" />
          </div>
          <div class="main_left_bottom">
            <h3>COURSES</h3>
            <div class="cards">
              <div class="card">
                <img src="@/assets/admin/logo.png" alt="react" />
                <h5>By admin</h5>
                <p>Learners: 20</p>
              </div>
              <div class="card">
                <img src="@/assets/admin/Js.png" alt="react" />
                <h5>By admin</h5>
                <p>Learners: 20</p>
              </div>
              <div class="card">
                <img src="@/assets/home.png" alt="react" />
                <h5>By admin</h5>
                <p>Learners: 20</p>
              </div>
              <div class="card">
                <img src="@/assets/admin/react.png" alt="react" />
                <h5>By admin</h5>
                <p>Learners: 20</p>
              </div>
              <div class="card">
                <img src="@/assets/admin/Js.png" alt="react" />
                <h5>By admin</h5>
                <p>Learners: 20</p>
              </div>
              <div class="card">
                <img src="@/assets/home.png" alt="react" />
                <h5>By admin</h5>
                <p>Learners: 20</p>
              </div>
              <div class="card">
                <img src="@/assets/admin/php.png" alt="react" />
                <h5>By admin</h5>
                <p>Learners: 20</p>
              </div>
              <div class="card">
                <img src="@/assets/admin/react.png" alt="react" />
                <h5>By admin</h5>
                <p>Learners: 20</p>
              </div>
            </div>
          </div>
        </div>
        <div class="main_right">
          <h3>CHARTS RANKS</h3>
          <div class="chart_cours">
            <BarChart />
          </div>
          <h3 class="recent_update">RECENTLY COURSES UPDATE</h3>
          <div class="recently_update">
            <div class="update_card">
              <img src="@/assets/home.png" alt="courses" />
              <div class="update_info">
                <h5>PHP</h5>
                <p>Last Updated: 12/05/2022</p>
              </div>
            </div>
            <div class="update_card">
              <img src="@/assets/admin/Js.png" alt="courses" />
              <div class="update_info">
                <h5>PHP</h5>
                <p>Last Updated: 12/05/2022</p>
              </div>
            </div>
            <div class="update_card">
              <img src="@/assets/admin/php.png" alt="courses" />
              <div class="update_info">
                <h5>PHP</h5>
                <p>Last Updated: 12/05/2022</p>
              </div>
            </div>
            <div class="update_card">
              <img src="@/assets/admin/react.png" alt="courses" />
              <div class="update_info">
                <h5>PHP</h5>
                <p>Last Updated: 12/05/2022</p>
              </div>
            </div>
            <div class="update_card">
              <img src="@/assets/home.png" alt="courses" />
              <div class="update_info">
                <h5>PHP</h5>
                <p>Last Updated: 12/05/2022</p>
              </div>
            </div>
            <div class="update_card">
              <img src="@/assets/admin/Js.png" alt="courses" />
              <div class="update_info">
                <h5>PHP</h5>
                <p>Last Updated: 12/05/2022</p>
              </div>
            </div>
            <div class="update_card">
              <img src="@/assets/admin/php.png" alt="courses" />
              <div class="update_info">
                <h5>PHP</h5>
                <p>Last Updated: 12/05/2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavAdmin from "../../components/Admin/NavBar.vue";
import SidebarView from "../../components/Admin/SideBar.vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import BarChart from "../../components/Admin/ChatComponent.vue";
export default {
  components: {
    NavAdmin,
    SidebarView,
    FullCalendar,
    BarChart,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin],
        initialView: "dayGridMonth",
        height: 400, // Set your desired height here
        events: [
          { title: "Event 1", date: "2024-08-21" },
          { title: "Event 2", date: "2024-08-22" },
        ],
      },
    };
  },
};
</script>

<style scoped>
.dashboard {
  display: flex;
  height: 100%;
  margin-top: 40px;
  padding-top: 50px;
}
.dash_container {
  display: flex;
  height: 100%;
  width: 100%;
}
.dashboard_main {
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #e0e0e0;
}
.main_left {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 320px;
  margin-top: 50px;
  margin-bottom: 20px;
  border-radius: 30px;
  height: 100%;
}
.main_left_top {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  background-color: #cb510d;
  color: #ffffff;
  border-radius: 20px;
  align-items: center;
}
.main_left_mid {
  padding: 30px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.655);
  height: 450px;
  overflow: hidden;
}

.main_left_bottom {
  margin-top: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  width: 100%;
  height: 550px;
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
.main_right {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 50px 20px 20px 20px;
  padding: 20px;
  border-radius: 30px;
  height: auto;
  background-color: #ccc;
}
.main_right h3 {
  margin-left: 20px;
  margin-top: 20px;
}
.chart_cours {
  margin-bottom: 20px;
  width: 100%;
  height: 450px;
  background-color: #ffffff;
  border-radius: 20px;
  margin-top: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.56);

}

.recently_update {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: thin;
  background-repeat: no-repeat;
  padding-bottom: 20px;
  border-radius: 20px;
  width: 100%;
  height: 500px;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.56);

}
.update_card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  background-repeat: no-repeat;
  width: 100%;
  height: auto;
  border-radius: 20px;
}

.update_card img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 50%;
}

.update_info {
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  margin-left: 20px;
  width: 80%;
  height: 100%;
  font-size: 12px;
  border-radius: 10px;
  background-color: #80CAFF;
}
</style>
