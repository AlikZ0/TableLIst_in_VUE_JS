<template>
 
  <div class="app">

    <div class="G-flex_a_tag">

      <div>
        <router-link class="btn"   to="/form">form</router-link>
        <router-link class="btn"   to="/list">list</router-link>
      </div>

      </div>
        <router-view v-slot="{ Component }">
            <transition name="slide" mode="out-in">
               <component :is="Component" />
            </transition>
        </router-view>
  </div>
</template>

<script>
</script>


<style >

body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: white;
  color: black;
}
.app{
  padding: 20px;
}
.post{
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display:flex ;
  align-items: center;
  justify-content: space-between;
}
form{
  display: flex;
  flex-direction: column;
}
strong{
  color:  teal;
}
.input{
  width: 97%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
.btn{
  margin-top: 15px;
  margin-right: 10px;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  cursor: pointer;
}
a{
  text-decoration: none;
}
.posts{
  padding: 15px;
  width: 100%;
  margin-top: 15px;
  display:flex ;
  align-items: center;
  justify-content: space-between;
}
.G-flex_a_tag{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* justify-content: space-between; */
  margin-bottom: 30px ;
}
.slide-enter-active, .slide-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.slide-enter, .slide-leave-to /* .slide-leave-active в <2.1.8 */ {
  opacity: 0;
  transform: translateX(10px);
  /* transform: translateZ(10px); */
}
</style>
