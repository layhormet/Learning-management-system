<template>
  <NavAdmin />
  <div class="admin_course">
    <div class="course_container">
      <SidebarView />
      <div class="course_contentainer">
        <div class="content_top">
          <div class="top_left">
            <h3>Welcome To Learn Our Courses</h3>
            <p>
              Discover new ways to learn, grow, and achieve your goals. Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Libero
              voluptatibus velit, cumque quam, nobis ipsa dolor rerum sapiente
              rem voluptatum quisquam, reiciendis repellat? Sequi porro possimus
              aut tempore optio ipsa odio quo autem deserunt voluptatibus,
              asperiores soluta minima ea omnis? ipsum dolor, sit amet
              consectetur adipisicing elit. Libero voluptatibus velit, cumque
              quam, nobis ipsa dolor rerum sapiente rem voluptatum quisquam,
              reiciendis repellat? Sequi porro possimus aut tempore optio ipsa
              odio quo autem deserunt voluptatibus, asperiores soluta minima ea
              omnis?
            </p>
            <button class="btn_primary">Start Courses</button>
          </div>
          <div class="top_right">
            <img src="@/assets/admin/course_banner.png" alt="banner" />
          </div>
        </div>
        <div class="content_mid">
          <h3>Our Pupular Courses</h3>
          <div class="btn_add">+ ADD COURSE</div>
        </div>
        <div class="content_bot">
          <div class="card">
            <img src="@/assets/admin/react.png" alt="react" />
            <h5>React Js</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class="card">
            <img src="@/assets/admin/react.png" alt="react" />
            <h5>React Js</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class="card">
            <img src="@/assets/admin/Js.png" alt="react" />
            <h5>React Js</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class="card">
            <img src="@/assets/admin/php.png" alt="react" />
            <h5>React Js</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class="card">
            <img src="@/assets/home.png" alt="react" />
            <h5>React Js</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div class="card">
            <img src="@/assets/admin/react.png" alt="react" />
            <h5>React Js</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
  name: "App",
  components: {
    NavAdmin,
    SidebarView,
  },
};
</script>
<style scoped>
.admin_course {
  display: flex;
  height: 100%;
  width: 100%;
  margin-top: 60px;
  padding-top: 50px;
  background-color: #e0e0e0;
}

.course_container {
  display: flex;
  height: 100%;
  width: 100%;
}

.course_contentainer {
  display: flex;
  flex-direction: column;
  width: 78%;
  margin-left: 320px;
  margin-top: 50px;
  margin-bottom: 20px;
  border-radius: 20px;
  height: 100%;
}
.content_top {
  border-radius: 30px;
  background-color: #4f7cc1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.756);
}

.top_left {
  display: flex;
  flex-direction: column;
  color: #ffffff;
  padding: 20px;
  width: 50%;
  height: 100%;
  gap: 2rem;
}

.top_left h3 {
  font-size: 28px;
  font-weight: bold;
}

.top_left p {
  font-size: 16px;
  line-height: 1.5;
  height: 140px;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.btn_primary {
  background-color: #ffffff;
  color: red;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.56);
}
.btn_primary:hover {
  background-color: red;
  color: #ffffff;
  transition: background-color 0.3s ease-in-out;
  transition: color 0.3s ease-in-out;
}
.top_right img {
  width: 500px;
  height: 350px;
}

.content_mid {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0px 50px 0px;
}
.btn_add {
  background-color: red;
  color: #ffffff;
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.733);
  text-align: center;
}
.btn_add:hover {
  background-color: #f04d01c4;
  color: #ffffff;
  transition: background-color 0.3s ease-in-out;
  transition: color 0.3s ease-in-out;
}
.content_bot {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 500px;
  padding: 0px;
  gap: 2.34rem;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.card {
  width: 350px;
  margin: 10px;
  border-radius: 20px;
  padding: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.663);
}

.card img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 20px;
}
</style>
