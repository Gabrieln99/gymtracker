<template>
  <div>
    <div class="d-flex justify-content-center my-4">
      <div>
        <button @click="prikaziVjezbu()" class="btn btn-primary">
          DODAJ VJEZBU
        </button>
      </div>
    </div>
    <div v-if="dodajVjezbuBool" class="text-center bg-secondary text-white p-2">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Naziv vjezbe</label
        >
        <input
          v-model="nazivVjezbe"
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Sets</label>
        <input
          v-model="sets"
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Reps</label>
        <input
          v-model="reps"
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Opis vjezbe</label
        >
        <textarea
          v-model="opisVjezbe"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <button @click="addVjezba" class="btn btn-primary">Dodaj vjezbu!</button>
    </div>
  </div>
</template>
<script>
import {
  getAuth,
  onAuthStateChanged,
  setDoc,
  db,
  doc,
  getDocs,
  query,
  collectionGroup,
} from "@/firestore";

const auth = getAuth();
export default {
  data() {
    return {
      vjezbe: [],
      user: null,
      dodajVjezbuBool: false,
      nazivVjezbe: "",
      sets: 0,
      reps: 0,
      opisVjezbe: "",
    };
  },
  async created() {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        this.user = user;
        this.getVjezbe();
      }
    });
  },
  methods: {
    addVjezba() {
      if (this.nazivVjezbe === "") {
        alert("nisi dodao vjezbu");
        return;
      }
      const postRef = doc(
        db,
        "users",
        this.user.email + "ID123",
        "posts",
        Date.now() + "vjezba"
      );
      setDoc(postRef, {
        email: this.user.email,
        naziv: this.nazivVjezbe,
        sets: this.sets,
        reps: this.reps,
        opis: this.opisVjezbe,
      });
      window.location.reload();
    },
    prikaziVjezbu() {
      this.dodajVjezbuBool = !this.dodajVjezbuBool;
    },
    async getVjezbe() {
      const q = query(collectionGroup(db, `posts`));
      const querySnapshot = await getDocs(q);
      this.vjezbe = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        this.vjezbe.push({
          email: data.email,
          naziv: data.nazivVjezbe,
          sets: data.sets,
          reps: data.reps,
          opis: data.opisVjezbe,
        });
      });
      console.log(this.vjezbe);
    },
  },
};
</script>

<style></style>
