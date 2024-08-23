<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div>
<button v-if="User" @click="signOuts" class="btn btn-secondary">ODJAVA</button>
    <RouterView />
  </div>
</template>
<script>
import store from "@/store";
import router from "./router";
import {onAuthStateChanged,getAuth,signOut} from '@/firestore.js'
const auth = getAuth()
export default {
  data() {
    return {
      User:false,
    };
  },
  methods: {
    signOuts(){
      signOut(auth)
        .then(() => {
          store.user=false
        })
        .catch((error) => {
          console.error(error);
        });
   }
    
  },
  async created() {
    onAuthStateChanged(auth, (user) => {
      console.log(user)
      if (user) {
        this.User=true
        if (!router.currentRoute.value.meta.User) {
          this.$router.replace({ name: "home" });
        }
      } else {
        this.User=false
        if (router.currentRoute.value.meta.User) {
          this.$router.replace({ name: "login" });
        }
      }
    });
  },
};
</script>
<style>
#app {
  padding: 0;
  margin: 0;
}
</style>
