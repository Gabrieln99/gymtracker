<template>
  <div>
    <spol v-if="index == 0" />
    <godine v-if="index == 1" />
    <tezina />
    <visina />
    <BMI />
    <button @click="nazad" v-if="index != 0">NAZAD</button>
    <button @click="narasti">DALJEEEE</button>
  </div>
</template>
<script>
import godine from "@/assets/godine.vue";
import spol from "@/assets/spol.vue";
export default {
  data() {
    return {
      index: 0,
    };
  },
  methods: {
    async narasti() {
      this.index += 1;
      console.log(this.index);
    },
  async nazad() {
    this.index -= 1;
    console.log(this.index);
  },
},
  components: {
    godine,
    spol,
  },
};
</script>

<style></style>
