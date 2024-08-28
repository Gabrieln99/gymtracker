<template>
  <div>
    <div class="pozadina">
      <img src="@/components/wallpapergym.jpg" alt="" />
    </div>
  <div
    class="w-75 container position-absolute top-50 start-50 translate-middle text-center bg-secondary p-3 rounded"
  >
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label"
        >Email address</label
      >
      <input
      v-model="email"
        type="email"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      />
    </div>
    <label for="inputPassword5" class="form-label">Password</label>
    <input
    v-model="password"
      type="password"
      id="inputPassword5"
      class="form-control"
      aria-describedby="passwordHelpBlock"
    />

    <div>
      Dont have an acc?
      <button @click="goToNextPage('register')" type="button" class="btn btn-outline-light mx-3 mt-2">
        Register
      </button>
    </div>
    <hr>
    <button @click="signIn()" type="button" class="btn btn-outline-light mx-3 mt-2">
      Log in
    </button>
    <button
      @click="goToNextPage('')"
      type="button"
      class="btn btn-outline-light mx-3 mt-2"
    >
      Back
    </button>
  </div>
</div>
</template>
<script>
import store from "@/store";
import { getAuth, signInWithEmailAndPassword} from '@/firestore'
const auth = getAuth()
export default {
  data() {
    return {
        email:"",
        password:""
    };
  },
  methods: {
    goToNextPage(page) {
      this.$router.push(`/${page}`);
    },
    signIn(){
        signInWithEmailAndPassword(auth, this.email, this.password)
  .then((userCredential) => {
    store.user=true
  })
  .catch((error) => {
    alert("wrong")
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    },
  },
};
</script>
