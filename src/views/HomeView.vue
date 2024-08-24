<template>
  <NavBar/>
  <div class="home">
    <section class="banner">
      <h1>Welcome to Our Learning Code</h1>
      <div class="search-box" >
        <input type="text" class="search-input-banner" placeholder="Search..." >
        <i class="fas fa-search"></i>
      </div>
    </section>
  
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar
  }
}
</script>

<style>
.banner {
  background-image: url("@/assets/home.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  margin-top: 75px;
  height: 715px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 19rem;
  padding: 20rem;
  color: white;
  text-align: center;
}
.search-box{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 0px;
  margin-top: 15px;
  width: 500px;
  padding: 5px 15px;
  background-color: white;
  border-radius: 30px;
}
.search-input-banner{
  width: 100%;
  padding: 8px;
  border: none;
  outline: none;
  background-color: inherit;
  color: #888;
  transition: 0.3s;

}
.search-box i{
  background-color: white;
  color: #888;
  cursor: pointer;
}
.search-box i:hover{
  color: #3B53A4;
  transition: 0.3s;
  scale: 1.1;
}
</style>
