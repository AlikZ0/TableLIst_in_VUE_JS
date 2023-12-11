import { createApp } from 'vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state :()=>({
   posts : [
    {id: Math.random(),name: "Poxos",famile: "Poxosyan",age: 20},
    {id: Math.random(),name: "Gevorg",famile: "Gevorgyan ",age: 25},
    {id: Math.random(),name: "Tigran",famile: "Tigranyan",age: 45},
    {id: Math.random(),name: "Qanduqrqp",famile: "Thozdumanyan",age: 55},
  ],
  postsEdit:[]

  }),
  getters:{
    allPost(state){
      return state.posts

    },
    allEdit(state){
      return state.postsEdit
    }
  },
  mutations: {
    CREATE_POST(state,post){

         state.posts.unshift(post);

    },
    REMOVE_POST(state,id){
     
         state.posts=state.posts.filter(p => p.id !== id);
    },
    EDIT_POSTS(state,post){

        state.postsEdit.push(post.id);

    },
    ON_CANCEL(state,post){

        state.postsEdit=state.postsEdit.filter(p => p !== post.id);

    },
    ON_SAVES(state,post){

       state.posts.forEach((e)=>{
         if (e.id===post.id) {
           e.age=post.age
           e.famile=post.famile
           e.name=post.name
         }
       });

    }
  },
  actions:{
    createPost(ctx,post){
      
      ctx.commit ('CREATE_POST',post);

    },
    EditPost(ctx,post){

      ctx.commit ('EDIT_POSTS',post);

    },
    Oncancel({commit},post){

      commit('ON_CANCEL',post);

    },
    OnSaves(ctx,post){

      ctx.commit('ON_SAVES',post);
      ctx.commit('ON_CANCEL',post);

    },
    RemovePost(ctx,id){

      ctx.commit('REMOVE_POST',id);

    }

  },
  modules: {

  }
})

export default store