<template>
  <NavBar />
  <div class="courses">
    <div class="side-bar">
      <aside id="sidebar" class="sidebar">
        <ul class="sidebar-nav" id="sidebar-nav">
          <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#javascript-nav" data-bs-toggle="collapse" href="#">
              <span>JavaScript</span>  <i class="bi bi-chevron-down"></i>
            </a>
            <ul id="javascript-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
              <li>
                <a href="#">
                  <span>JavaScript Syntax</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>JavaScript Functions</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>JavaScript Variables</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>JavaScript Data Types</span>
                </a>
              </li>
              <!-- Add more links here -->
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#nodejs-nav" data-bs-toggle="collapse" href="#">
              <span>Node.js</span><i class="bi bi-chevron-down"></i>
            </a>
            <ul id="nodejs-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
              <li v-for="i in 20" :key="i" @click="handleClick(i)">
                <a href="#">
                  <span>Alerts {{ i }}</span>
                </a>
              </li>
              <!-- Add more Node.js-related links here -->
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#reactjs-nav" data-bs-toggle="collapse" href="#">
              <span>React.js</span><i class="bi bi-chevron-down"></i>
            </a>
            <ul id="reactjs-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
              <li v-for="i in 20" :key="i" @click="handleClick(i)">
                <a href="#">
                  <span>Alerts {{ i }}</span>
                </a>
              </li>
              <!-- Add more React.js-related links here -->
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#python-nav" data-bs-toggle="collapse" href="#">
              <span>Python</span><i class="bi bi-chevron-down"></i>
            </a>
            <ul id="python-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
              <li v-for="i in 20" :key="i" @click="handleClick(i)">
                <a href="#">
                  <span>Alerts {{ i }}</span>
                </a>
              </li>
              <!-- Add more Python-related links here -->
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#vuejs-nav" data-bs-toggle="collapse" href="#">
              <span>Vue.js</span><i class="bi bi-chevron-down"></i>
            </a>
            <ul id="vuejs-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
              <li v-for="i in 20" :key="i" @click="handleClick(i)">
                <a href="#">
                  <span>Alerts {{ i }}</span>
                </a>
              </li>
              <!-- Add more Vue.js-related links here -->
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#php-nav" data-bs-toggle="collapse" href="#">
              <span>PHP</span><i class="bi bi-chevron-down"></i>
            </a>
            <ul id="php-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
              <li v-for="i in 20" :key="i" @click="handleClick(i)">
                <a href="#">
                  <span>Alerts {{ i }}</span>
                </a>
              </li>
              <!-- Add more PHP-related links here -->
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link collapsed" data-bs-target="#laravel-nav" data-bs-toggle="collapse" href="#">
              <span>Laravel</span><i class="bi bi-chevron-down"></i>
            </a>
            <ul id="laravel-nav" class="nav-content collapse" data-bs-parent="#sidebar-nav">
              <li v-for="i in 20" :key="i" @click="handleClick(i)">
                <a href="#">
                  <span>Alerts {{ i }}</span>
                </a>
              </li>
              <!-- Add more Laravel-related links here -->
            </ul>
          </li>
        </ul>
      </aside>
    </div>

    <!-- info on the right side -->
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
        <div class="card" style="background-color: gainsboro; padding: 30px;">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eaque, veniam quasi natus et quia at rerum,
            fugiat quae ex nemo quibusdam iste aspernatur. Fuga tenetur quia voluptatem tempora laboriosam?</p>
          <h4>Example</h4>
          <div class="card-Ex" style="background-color: white; padding: 20px; color: green;">
            <div>
              <p>x = 4 # x is of type int</p>
              <p>x = "Lara" # x is now of type str</p>print (x)
            </div>
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
        <div class="card" style="background-color: gainsboro; padding: 30px;">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eaque, veniam quasi natus et quia at rerum,
            fugiat quae ex nemo quibusdam iste aspernatur. Fuga tenetur quia voluptatem tempora laboriosam?</p>
          <h4>Example</h4>
          <div class="card-Ex" style="background-color: white; padding: 20px; color: green;">
            <div>
              <p>x = 4 # x is of type int</p>
              <p>x = "Lara" # x is now of type str</p>print (x)
            </div>
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
        <div class="card" style="background-color: gainsboro; padding: 30px;">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eaque, veniam quasi natus et quia at rerum,
            fugiat quae ex nemo quibusdam iste aspernatur. Fuga tenetur quia voluptatem tempora laboriosam?</p>
          <h4>Example</h4>
          <div class="card-Ex" style="background-color: white; padding: 20px; color: green;">
            <div>
              <p>x = 4 # x is of type int</p>
              <p>x = "Lara" # x is now of type str</p>print (x)
            </div>
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
        <div class="card" style="background-color: gainsboro; padding: 30px;">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eaque, veniam quasi natus et quia at rerum,
            fugiat quae ex nemo quibusdam iste aspernatur. Fuga tenetur quia voluptatem tempora laboriosam?</p>
          <h4>Example</h4>
          <div class="card-Ex" style="background-color: white; padding: 20px; color: green;">
            <div>
              <p>x = 4 # x is of type int</p>
              <p>x = "Lara" # x is now of type str</p>print (x)
            </div>
          </div>
        </div>
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
  padding: 15px;
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
.sidebar-nav li a.nav-link:hover {
  background-color: rgb(209, 198, 137);
  color: #333; 
  padding: 5px; 
  border-radius: 5px; 
  font-weight: bold; 
}
.sidebar-nav a.active{
  background-color: aqua;
}

.sidebar-nav  li {
  list-style-type: none;
}


.nav-item  i{
  display: flex;
  justify-content: end;
  
}
</style>