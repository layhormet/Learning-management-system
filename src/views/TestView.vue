<template>
  <NavBar/>
    <div class="test">
      <h1>test</h1>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import NavBar from '@/components/NavBar.vue';
  
  export default {
    name: 'testView',
    components: {
      NavBar
    }
  }
  </script>
  
  <style>
  </style>
  