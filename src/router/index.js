import { createRouter,createWebHashHistory } from "vue-router";
import PostForm from '../components/PostForm.vue'
import TableLIstVue from "../components/TableLIst.vue";
import Posts from "../components/Posts.vue"
const router= createRouter({
    history:createWebHashHistory(),
    routes:[
        {path:"/",component:TableLIstVue, alias:"/list"},
        {path:"/form",component:PostForm},
        {path:"/list/:id",component:Posts}

    ]
});

export default router