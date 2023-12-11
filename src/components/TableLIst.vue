<template>
    <div class="post" >
     <table>
        <thead >
            <tr>
              <th colspan="2">FullName</th>
              <th>age</th>
              <th>button</th>
            </tr>
        </thead>
        <thead   v-for='post in allPost' :key='allPost.id'>
            <post-row v-if='filtrEdit(post)' :post='post' :key='post.id'/>
            <edit-row v-else  :post='post'/>
        </thead>
     </table>     
   </div>
 </template>
 
 <script>
 import PostRow from "./PostRow.vue"
 import EditRow from "./EditRow.vue"

 import {mapGetters}  from "vuex"

 export default {

    computed:mapGetters(['allPost','allEdit']),


    components: {
       PostRow,
       EditRow,
    },

    methods: { 
    
      filtrEdit(post){

        return !this.allEdit.includes(post.id);

      }
    }
 }
 
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
  /* width: 120px; */
  /* text-align: center; */
  text-align-last: center;
  border: 1px solid #dddddd;
  /* text-align: left;
  padding: 8px; */
}

tr:nth-child(even) {
  background-color: #dddddd;
}
 </style>