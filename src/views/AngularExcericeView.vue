<template>
    <NavBar />
    <div class="Angular-excerice">
      <SideBar />
      <!-- info on the right side -->
      <div class="right-side" style="display: flex;flex-wrap: wrap;">
        <div class="title">
          <h3>Angular</h3>
          <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quod. Placeat sint, adipisci tenetur magni
            sit non ab. Fuga neque eveniet perferendis dolore facilis dolores voluptatibus atque recusandae rem porro!</P>
          <hr>
        </div>
        <div class="title"> 
          <h3>AngularJS Modules</h3>
          <div class="card">
            <h4>Example:</h4>
            <p>AngularJS Modules</p>
            <div class="card-Ex">
              <div>
                <p>script</p>
                <p>var app = angular.module("myApp", []);</p>
                <p>script</p>
              </div>
            </div>
            <a href="/do-excerice"><button class="btn btn-warning" style="width: 150px; margin-top: 10px;">Try Yourself</button></a>
          </div>
          <hr>
        </div>
        <div class="title">
          <h3>Angular</h3>
          <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quod. Placeat sint, adipisci tenetur magni
            sit non ab. Fuga neque eveniet perferendis dolore facilis dolores voluptatibus atque recusandae rem porro!</P>
          <hr>
        </div>
        <div class="title">
          <h3>Angular</h3>
          <div class="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eaque, veniam quasi natus et quia at rerum,
              fugiat quae ex nemo quibusdam iste aspernatur. Fuga tenetur quia voluptatem tempora laboriosam?</p>
            <h4>Example:</h4>
            <div class="card-Ex">
              <div>
                <p>x = 4 # x is of type int</p>
                <p>x = "Lara" # x is now of type str </p>print (x)
              </div>
            </div>
            <a href="#"><button class="btn btn-warning" style= "width: 150px; margin-top: 10px;">Try Yourself</button></a>
          </div>
          <hr>
        </div>
        <div class="title">
          <h3>Angular</h3>
          <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quod. Placeat sint, adipisci tenetur magni
            sit non ab. Fuga neque eveniet perferendis dolore facilis dolores voluptatibus atque recusandae rem porro!</P>
          <hr>
        </div>
        <div class="title">
          <h3>Angular</h3>
          <div class="card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eaque, veniam quasi natus et quia at rerum,
              fugiat quae ex nemo quibusdam iste aspernatur. Fuga tenetur quia voluptatem tempora laboriosam?</p>
            <h4>Example:</h4>
            <div class="card-Ex">
              <div>
                <p>x = 4 # x is of type int </p> 
                <p>x = "Lara" # x is now of type str </p> print (x)
              </div>
            </div>
            <a href="#"><button class="btn btn-warning" style="width: 150px; margin-top: 10px;">Try Yourself</button></a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/NavBar.vue';
  import SideBar from '@/components/SideBar.vue';
  
  export default {
    name: 'AngularExcericesView',
    components: {
      NavBar,
      SideBar
    },
  }
  </script>
  
  <style>
  .Angular-excerice {
    margin-top: 70px;
    display: flex;
    height: calc(100vh - 70px);
    background-color: white;
  }
  
  .card {
    background-color: gainsboro;
    padding: 30px;
  }
  
  .card-Ex {
    background-color: white;
    padding: 20px;
    color: green;
  }
  .title{
    width: 100%;
  }
  </style>