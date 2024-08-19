<template>
  <nav class="navbar">
    <div class="container">
      <h1 style="
            font-size: 40px;
            font-style: italic;
            font-weight: 800;
            cursor: pointer;
          ">
        <span style="color: black;">LM</span>
        <span style="color: #3b53a4;">S</span>
      </h1>
      <ul>
        <li><router-link to="/">Home</router-link></li>
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
  background-color: #E4F2FD;
}

nav a {
  text-decoration: none;
}

nav a:hover {
  color: #3B53A4;
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
.search-container{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 0px;
  width: 350px;
  padding: 3px 10px;
  background-color: white;
  border: 1px solid rgb(51, 121, 0);
  border-radius: 30px;
}
.search-input{
  width: 100%;
  padding: 5px;
  border: none;
  outline: none;
  background-color: inherit;
  color: #888;
  transition: 0.3s;
  
}
.search-container i {
  color: #888;
  cursor: pointer;
}
.search-container i:hover{
  color: #3B53A4;
  transition: 0.3s;
  scale: 1.1;
}
</style>