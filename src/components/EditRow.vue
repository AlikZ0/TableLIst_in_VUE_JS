<!-- EditPostRow.vue -->
<template>
    <tr>
      <td colspan="2" class="G-flex">
        <input
          v-model='editedPost.name'
          class="input"  
          type="text" 
          placeholder="name" 
        />

        <input 
          v-model='editedPost.famile' 
          class="input" 
          type="text" 
          placeholder="famile" 
        />
      </td>
      <td>
        <input 
          v-model='editedPost.age' 
          class="input" 
          type="number" 
          placeholder="age" 
        />
      </td>
      <td>
        <button 
          class="btn" 
          @click='savePost()'
        >
           Save
        </button>

        <button 
          class="btn" 
          @click='onCancel()'
        >
           Cancel
        </button>
      </td>
    </tr>
  </template>
  
  <script>
    import {mapActions} from "vuex"
  export default {
    props: {
      post: {
        type: Object,
        required: true,
      },
    },

    data: () => ({
      editedPost: null,
      
    }),

    beforeMount() {
      this.editedPost = { ...this.post };
    },

    methods: {
      ...mapActions(['OnSaves','Oncancel']),
      savePost() {

        this.OnSaves(this.editedPost);

      },

      onCancel() {
        
        this.Oncancel(this.post);
        
      },
    }
  };
  </script>
  
  <style scoped>
 
  strong{
    color:  teal;
  }
  .input{
    margin-right: 20px;
    width: 40%;
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
  table {
 font-family: arial, sans-serif;
 border-collapse: collapse;
 width: 100%;
}

td, th {
 width: 230px;
 /* text-align: center; */
 text-align-last: center;
 border: 1px solid #dddddd;
 text-align: left;
 padding: 8px;
}

tr:nth-child(even) {
 background-color: #dddddd;
}
</style>