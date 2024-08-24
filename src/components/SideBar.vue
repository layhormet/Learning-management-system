<template>
    <div class="side-bar-excerice">
      <aside id="sidebar" class="sidebar">
        <ul class="sidebar-nav">
          <li class="nav-item-excerice"><a class="nav-link" href="/exerices"><span>JavaScript</span></a></li>
          <li class="nav-item-excerice"><a class="nav-link" href="/angular-excerice"><span>Angular</span></a></li>
          <li class="nav-item-excerice"><a class="nav-link" href="#"><span>React.js</span></a></li>
          <li class="nav-item-excerice"><a class="nav-link" href="/python-excerice"><span>Python</span></a></li>
          <li class="nav-item-excerice"><a class="nav-link" href="#"><span>Vue.js</span></a></li>
          <li class="nav-item-excerice"><a class="nav-link" href="#"><span>PHP</span></a></li>
          <li class="nav-item-excerice"><a class="nav-link" href="#"><span>Laravel</span></a></li>
          <li class="nav-item-excerice"><a class="nav-link" href="#"><span>C++</span></a></li>
          <li class="nav-item-excerice"><a class="nav-link" href="#"><span>C#</span></a></li>
          <li class="nav-item-excerice"><a class="nav-link" href="#"><span>Next.js</span></a></li>
          <li class="nav-item-excerice"><a class="nav-link" href="#"><span>Java</span></a></li>
          <li class="nav-item-excerice"><a class="nav-link" href="#"><span>HTML</span></a></li>
          <li class="nav-item-excerice"><a class="nav-link" href="#"><span>CSS</span></a></li>
          <li class="nav-item-excerice"><a class="nav-link" href="#"><span>SQL</span></a></li>
        </ul>
      </aside>
    </div>
</template>

<script>
  export default {
  name: "NaBar",
};
</script>

<style>
.side-bar-excerice {
  background-color: rgb(255, 250, 250);
  width: 25%;
  height: 100%;
  overflow-y: auto;
  padding: 15px;
}
.side-bar-excerice::-webkit-scrollbar {
  width: 8px;
}
.side-bar-excerice::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}
.side-bar-excerice::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 4px;
}
.side-bar-excerice::-webkit-scrollbar-thumb:hover {
  background-color: #555;
}
.right-side-excerice {
  width: 75%;
  padding: 30px;
  overflow-y: auto;
}
.sidebar-nav li {
  list-style-type: none;
}
.nav-item-excerice {
  padding: 10px;
}
</style>