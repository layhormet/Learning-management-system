<template>
  <NavBar/>
  <div class="home">
    <section class="banner">
      <h1>Welcome to Over Learning Code</h1>
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
  background-image: url("@/assets/image 2.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 16.45rem;
  color: white;
  text-align: center;
}
.search-input-banner{
  padding: 15px;
  border-radius: 30px;
  width: 50%;

}
 

</style>
