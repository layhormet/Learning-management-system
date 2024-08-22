<template>
  <div class="nav_admin">
    <div class="logo">
      <img src="@/assets/admin/logo.png" alt="Logo" />
    </div>
    <div class="search_box">
      <input
        type="text"
        placeholder="Search here ................................."
      />
      <i class="fa fa-search"></i>
    </div>
    <div class="nav_right">
      <div class="notification">
        <i class="fa fa-bell"></i>
        <div class="count_notification">
          <span>+99</span>
        </div>
      </div>
      <div class="download">
        <i class="fa fa-download"></i>
      </div>
      <div class="user_profile">
        <img src="@/assets/home.png" alt="User" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavAdmin",
};
</script>
<style scoped>
.nav_admin {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 90px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.logo img {
  width: 60px;
}
.search_box {
  border: none;
  padding: 8px 20px;
  width: 650px;
  border-radius: 50px;
  position: relative;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  background-color: #e2e2e2;
}
.search_box input {
  color: #001f54;
  padding: 5px 20px;
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
}

.search_box i {
  font-size: 20px;
  color: #001f54;
}
.search_box i:hover,
.notification i:hover,
.download i:hover {
  color: #001f54;
  transition: color 0.3s ease;
  scale: 1.1;
}
.nav_right {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
}
.notification,
.download,
.user_profile {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #e2e2e2;
  color: #001f54;
  position: relative;
}
.notification i,
.download i {
  font-size: 25px;
}
.count_notification {
  display: block;
  background-color: red;
  color: #fff;
  font-size: 10px;
  padding: 5px;
  border-radius: 20px;
  position: absolute;
  top: -15px;
  right: -10px;
}
.user_profile img {
  width: 55px;
  height: 55px;
  border-radius: 50%;
}
</style>
