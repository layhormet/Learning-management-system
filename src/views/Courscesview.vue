<template>
  <NavBar />
  <div class="courses">
    <div class="side-bar">
      <aside id="sidebar" class="sidebar">
        <ul class="sidebar-nav" id="sidebar-nav">
          <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
              <span>JAVASCRIPT</span><i class="bi bi-chevron-down"></i>
            </a>
            <ul id="components-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
              <li>
                <router-link to="#">
                    <span>JavaScript Syntax</span>
                </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
              <span>NODE.JS</span><i class="bi bi-chevron-down"></i>
            </a>
            <ul id="components-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
              <li v-for="i in 21" :key="i" @click="handleClick(i)">
                <router-link to="/">
                  <span>Alerts {{ i }}</span>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </div>

    <div class="right-side" style="display: flex;flex-wrap: wrap;">
      <div class="title">
        <h3>JavaScript Syntax</h3>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quod. Placeat sint, adipisci tenetur magni
          sit non ab. Fuga neque eveniet perferendis dolore facilis dolores voluptatibus atque recusandae rem porro!</P>
        <hr>
      </div>
      <div class="title">
        <h3>JAVASCRIPT</h3>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quod. Placeat sint, adipisci tenetur magni
          sit non ab. Fuga neque eveniet perferendis dolore facilis dolores voluptatibus atque recusandae rem porro!</P>
        <hr>
      </div>
      <div class="title">
        <h3>JAVASCRIPT</h3>
        <div class="card" style="background-color: antiquewhite; padding: 30px; height: 70vh;">

          <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quod. Placeat sint, adipisci tenetur magni
            sit non ab. Fuga neque eveniet perferendis dolore facilis dolores voluptatibus atque recusandae rem porro!</P>
            <div class="card-Ex">
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis temporibus officia, ducimus consectetur repudiandae eligendi magni cum dolorem enim earum accusantium ullam laudantium ipsa sequi suscipit dolores eum minima. Magni.</p>
              
            </div>
          </div>
          <hr>
      </div>
      <div class="title">
        <h3>JAVASCRIPT</h3>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quod. Placeat sint, adipisci tenetur magni
          sit non ab. Fuga neque eveniet perferendis dolore facilis dolores voluptatibus atque recusandae rem porro!</P>
        <hr>
      </div>
      <div class="title">
        <h3>JAVASCRIPT</h3>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quod. Placeat sint, adipisci tenetur magni
          sit non ab. Fuga neque eveniet perferendis dolore facilis dolores voluptatibus atque recusandae rem porro!</P>
        <hr>
      </div>
      <div class="title">
        <h3>JAVASCRIPT</h3>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quod. Placeat sint, adipisci tenetur magni
          sit non ab. Fuga neque eveniet perferendis dolore facilis dolores voluptatibus atque recusandae rem porro!</P>
        <hr>
      </div>
      <div class="title">
        <h3>JAVASCRIPT</h3>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quod. Placeat sint, adipisci tenetur magni
          sit non ab. Fuga neque eveniet perferendis dolore facilis dolores voluptatibus atque recusandae rem porro!</P>
        <hr>
      </div>
      <div class="title">
        <h3>JAVASCRIPT</h3>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quod. Placeat sint, adipisci tenetur magni
          sit non ab. Fuga neque eveniet perferendis dolore facilis dolores voluptatibus atque recusandae rem porro!</P>
        <hr>
      </div>
      <div class="title">
        <h3>JAVASCRIPT</h3>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quod. Placeat sint, adipisci tenetur magni
          sit non ab. Fuga neque eveniet perferendis dolore facilis dolores voluptatibus atque recusandae rem porro!</P>
        <hr>
      </div>
      <div class="title">
        <h3>JAVASCRIPT</h3>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quod. Placeat sint, adipisci tenetur magni
          sit non ab. Fuga neque eveniet perferendis dolore facilis dolores voluptatibus atque recusandae rem porro!</P>
        <hr>
      </div>
      <div class="title">
        <h3>JAVASCRIPT</h3>
        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quod. Placeat sint, adipisci tenetur magni
          sit non ab. Fuga neque eveniet perferendis dolore facilis dolores voluptatibus atque recusandae rem porro!</P>
        <hr>
      </div>
      
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'CoursesView',
  components: {
    NavBar
  },
  methods: {
    handleClick(index) {
      console.log(`Clicked on Alerts ${index}`);
    }
  }
 
}
</script>

<style>
.courses {
  margin-top: 70px;
  display: flex;
  height: calc(100vh - 70px);
  background-color: white;
}

.side-bar {
  background-color: rgb(255, 250, 250);
  width: 25%;
  height: 100%;
  overflow-y: auto;
  padding: 20px;
}

.side-bar::-webkit-scrollbar {
  width: 8px;
}

.side-bar::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}

.side-bar::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}

.side-bar::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}

.right-side {
  width: 75%;
  padding: 30px;
  overflow-y: auto;
}
</style>