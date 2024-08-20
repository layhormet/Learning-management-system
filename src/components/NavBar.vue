<template>
  <nav class="navbar">
    <div class="container">
      
      <div class="logo d-flex" style="gap: 15px;">
        <img src="../assets/image 17 (1).png" alt="">
        <h3>Vectorasoft</h3>
      </div>
      <ul>
        <li><router-link to="/"></router-link></li>
        <li><router-link to="/coursce">Courses</router-link></li>
        <li><router-link to="/exercises">Exercises</router-link></li>
        <li><router-link to="/test">Test</router-link></li>
      </ul>
      <div class="search-container">
        <input type="text" class="search-input" placeholder="Search.....">
        <!-- <i class="fas fa-search"></i> -->
      </div>
    </div>
  </nav>

</template>

<script>
  export default {
  name: "NaBar",
};
</script>

<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  z-index: 1000;top: 0;
  
}
nav {
  background-color: rgba(248, 255, 255, 0.986);
}

nav a {
  text-decoration: none;
}

nav a.router-link-active {
  font-weight: 2px;
  color: #3B53A4;
}


li {
  display: inline-block;
  margin: 0 30px;
}

a {
  color: black;
}
</style>