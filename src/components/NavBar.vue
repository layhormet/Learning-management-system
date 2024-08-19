<template>
  <nav class="navbar">
    <div class="container">
      <h1 style="
            font-size: 40px;
            font-style: italic;
            font-weight: 800;
          ">
        <span style="color: black;">LM</span>
        <span style="color: #3b53a4;">S</span>
      </h1>
      <ul>
        <li><router-link to="/"></router-link></li>
        <li><router-link to="/coursce">Courses</router-link></li>
        <li><router-link to="/exercises">Exercises</router-link></li>
        <li><router-link to="/test">Test</router-link></li>
      </ul>
      <div class="search-container">
        <input type="text" class="search-input" placeholder="Search...">
        <i class="fas fa-search"></i>
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
  background-color: white;
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