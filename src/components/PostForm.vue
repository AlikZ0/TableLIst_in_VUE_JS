<template>
     <form  @submit.prevent="submitForm" >
      <div>
        <router-link class="btn"   :to="{path:foo()}" @click='foo'>back</router-link>
      </div>

        <h4>Avelacnel post</h4>
       

        <input 
          class="input" 
          v-model="post.name"
          type="text" 
          placeholder="name"
        >

        <input 
          class="input" 
          v-model="post.famile"
          type="text" 
          placeholder="famile"
        >

        <input 
          class="input" 
          v-model="post.age"
          type="number" 
          placeholder="age"
        >

        <button 
          class="btn" 
          @click="createPosts"
        >Add post</button>
        
      </form>

</template>

<script>

import {mapActions} from "vuex";

export default {
  emits: ['create'],

  data : () => ({
    post: {
      name: '',
      famile: '',
      age: '',
    }
  }), 

  methods: {    

    ...mapActions(['createPost']),

    createPosts() {          
      if (this.post.name && this.post.famile && this.post.age) {
          this.post.id= Math.random();

          this.createPost(this.post);

          this.$router.push("/list");

          this.post={
            name: '',
            famile: '',
            age: '',
          }
      }
    },

    submitForm(){

    },

    foo(){
     return "/"     
    }

  }
}

</script>

<style scoped>
.app{
  padding: 20px;
}
.post{
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
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
.posts{
  padding: 15px;
  width: 100%;
  margin-top: 15px;
  display:flex ;
  align-items: center;
  justify-content: space-between;
}

</style>