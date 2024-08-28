<template>
  <div>
    <div class="pozadina">
      <img src="@/components/wallpapergym.jpg" alt="" />
    </div>
    <div>
      <div v-if="admin" class="position-absolute top-0 end-0">
        <button @click="SuperSet()" class="btn btn-danger">
          DODAJ NAPREDNU VJEZBU
        </button>
      </div>
    </div>
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
    <div
      class="text-center my-3 border border-dark-subtle p-2 mx-5 bg-body-secondary rounded"
      v-for="vjezba in vjezbe"
      :key="vjezba"
    >
      <div class="">Naziv vjezbe: {{ vjezba.naziv }}</div>
      <div class="">Sets:: {{ vjezba.sets }}</div>
      <div class="">Reps: {{ vjezba.reps }}</div>
      <hr />
      <div v-if="vjezba.opis" class="">Opis vjezbe: {{ vjezba.opis }}</div>
    </div>
    <div class="text center d-flex justify-content-center">
      <button @click="showSuper" class="btn btn-warning">
        PRIKAZI NAPREDNE VJEZBE
      </button>
    </div>
    <div v-if="SUPERshow">
      <div
        class="text-warning text-center my-3 border border border-3 border-danger p-2 mx-5 bg-dark rounded"
        v-for="SUPERvjezba in SUPERvjezbe"
        :key="SUPERvjezba"
      >
        <div class="">Naziv vjezbe: {{ SUPERvjezba.naziv }}</div>
        <div class="">Sets:: {{ SUPERvjezba.sets }}</div>
        <div class="">Reps: {{ SUPERvjezba.reps }}</div>
        <hr />
        <div v-if="SUPERvjezba.opis" class="">
          Opis vjezbe: {{ SUPERvjezba.opis }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  getAuth,
  onAuthStateChanged,
  setDoc,
  db,
  where,
  doc,
  getDocs,
  query,
  collection,
  collectionGroup,
} from "@/firestore";

const auth = getAuth();
export default {
  data() {
    return {
      email: "",
      SUPERshow: false,
      SUPERvjezbe: [],
      vjezbe: [],
      user: null,
      dodajVjezbuBool: false,
      nazivVjezbe: "",
      sets: 0,
      reps: 0,
      opisVjezbe: "",
      admin: false,
    };
  },
  async created() {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        this.user = user;
        this.getVjezbe();
        this.getAdmin();
      }
    });
  },
  methods: {
    async getAdmin() {
      const q = query(
        collection(db, "users"),
        where("email", "==", this.user.email)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.admin === true) this.admin = true;
      });
    },
    async SuperSet() {
      if (!this.dodajVjezbuBool) {
        this.dodajVjezbuBool = true;
        return;
      }
      if (this.nazivVjezbe === "") {
        alert("nisi dodao vjezbu");
        return;
      }
      const postRef = doc(db, "SUPERposts", Date.now() + "SUPERvjezba");
      setDoc(postRef, {
        email: this.user.email,
        naziv: this.nazivVjezbe,
        sets: this.sets,
        reps: this.reps,
        opis: this.opisVjezbe,
      }).then(() => {
        window.location.reload();
      });
    },
    async addVjezba() {
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
      }).then(() => {
        window.location.reload();
      });
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
        console.log("DATA: ", data);
        this.vjezbe.push({
          email: data.email,
          naziv: data.naziv,
          sets: data.sets,
          reps: data.reps,
          opis: data.opis,
        });
      });
      console.log(this.vjezbe);
    },
    showSuper() {
      if (!this.SUPERshow) {
        this.getSUPER();
        this.SUPERshow = true;
      } else {
        this.SUPERshow = false;
        this.SUPERvjezbe = [];
      }
    },
    async getSUPER() {
      const querySnapshot = await getDocs(collection(db, "SUPERposts"));
      this.SUPERvjezbe = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log("DATA: ", data);
        this.SUPERvjezbe.push({
          email: data.email,
          naziv: data.naziv,
          sets: data.sets,
          reps: data.reps,
          opis: data.opis,
        });
      });
    },
  },
};
</script>

<style>
.pozadina {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -999;
}

.pozadina img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
