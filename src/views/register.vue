<template>
  <div
    class="w-50 container position-absolute top-50 start-50 translate-middle text-center bg-secondary p-3 rounded"
  >
    <div class="input-group">
      <span class="input-group-text">First and last name</span>
      <input
        v-model="ime"
        type="text"
        aria-label="First name"
        class="form-control"
      />
      <input
        v-model="prezime"
        type="text"
        aria-label="Last name"
        class="form-control"
      />
    </div>
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
    <div id="passwordHelpBlock" class="form-text">
      Your password must be 8-20 characters long, contain letters and numbers,
      and must not contain spaces, special characters, or emoji.
    </div>
    <label for="inputPassword5" class="form-label">Repeat password</label>
    <input
      v-model="repeatPassword"
      type="password"
      id="reinputPassword5"
      class="form-control"
      aria-describedby="passwordHelpBlock"
    />
    <button
      @click="registerUser()"
      type="button"
      class="btn btn-outline-light mx-3 mt-2"
    >
      Register
    </button>
    <button
      @click="goToNextPage()"
      type="button"
      class="btn btn-outline-light mx-3 mt-2"
    >
      Back
    </button>
  </div>
</template>
<script>
import store from "@/store";
import {
  getAuth,
  createUserWithEmailAndPassword,
  doc,
  setDoc,
  db,
} from "@/firestore.js";
const auth = getAuth();
export default {
  data() {
    return {
      ime: "",
      prezime: "",
      email: "",
      password: "",
      repeatPassword: "",
    };
  },
  methods: {
    async registerUser() {
      if (this.ime.length === 0 || this.prezime.length === 0) {
        alert("popuni sva polja");
        return;
      }
      if (this.password !== this.repeatPassword) {
        alert("razlicite sifre");
        return;
      }
      if (this.password.length < 8 || this.password.length > 20) {
        alert("mora imat izmedu 8 i 20 znakova sifra");
        return;
      }
      console.log(this.email, this.password);
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          store.user = true;
          const usersRef = doc(db, "users", this.email + "ID123");
          setDoc(usersRef, {
            email: this.email,
            ime: this.ime,
            prezime: this.prezime,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    },
    goToNextPage() {
      this.$router.push("/");
    },
  },
};
</script>
