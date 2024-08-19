<template>
  <NavBar />
  <div class="courses">
    <div class="side-bar">
      <aside id="sidebar" class="sidebar">
      <ul class="sidebar-nav" id="sidebar-nav">
      <div class="nav-item">
        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-menu-button-wide"></i><span>JAVASCRIPT</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="#">
              <i class="bi bi-circle"></i><span>Alerts</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bi bi-circle"></i><span>Alerts</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bi bi-circle"></i><span>Alerts</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="bi bi-circle"></i><span>Alerts</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="nav-item-2">
        <a class="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
          <i class="bi bi-menu-button-wide"></i><span>Components</span><i class="bi bi-chevron-down ms-auto"></i>
        </a>
        <ul id="components-nav" class="nav-content collapse " data-bs-parent="#sidebar-nav">
          <li>
            <a href="#">
              <i class="bi bi-circle"></i><span>Alerts</span>
            </a>
          </li>
        </ul>
      </div>
      </ul>
    </aside>
    </div>
    <div class="right-side">
      <h1>hello</h1>
    </div>
    <div class="container">
    </div>

  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'CoursesView',
  components: {
    NavBar
  }
}
</script>

<style>
.courses {
  margin-top: 70px;
 
  display: flex;
  height: calc(100vh - 70px);
  background-color: rgb(238, 252, 252);
}

.side-bar {
  background-color:  rgb(244, 253, 253);
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
</style>