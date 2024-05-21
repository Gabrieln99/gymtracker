<template>
  <div class="about">
    <button @click="napraviNesto">AAAAAAAAAAAAAAAAAAA</button>
  </div>
</template>
<script>
import { doc, setDoc, db } from "@/firestore";
export default {
  data() {
    return {
      ime: "gabriel",
      prezime: "nadal",
    };
  },
  methods: {
    async napraviNesto() {
      await setDoc(doc(db, "user", "gabriel"), {
        name: this.ime,
        prezime: this.prezime,
      });
    },
  },
};
</script>

<style></style>
