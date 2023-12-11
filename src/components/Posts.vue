<template >
    <div>
        <div>
            <div>
                <router-link class="btn" :to="{ path: foo() }" @click='foo'>back</router-link>
            </div>
            <h1 class="postid"><strong>Namber posts</strong> {{ $route.params.id }}</h1>
            <div class="postid">
                
                    <div><strong>name:</strong> {{ getPosts.name }}</div>
                    <div><strong>famile:</strong> {{ getPosts.famile }}</div>
                    <div><strong>age:</strong> {{ getPosts.age }}</div>

                


            </div>

        </div>

    </div>
</template>
<script>
import { mapGetters } from "vuex"
export default {

    computed: {
        ...mapGetters(['allPost']),
        getPosts() {
            return this.allPost.find(post => post.id == this.$route.params.id) || {};
        }
    },
    methods: {
        foo() {
            return "/list"
        },

    }
}
</script>
<style scoped>
  .postid{
    padding: 15px;
    border: 2px solid teal;
    margin-top: 15px;
    display:flex ;
    align-items: center;
    justify-content: space-between;
  }
</style>