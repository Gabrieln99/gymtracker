<template>
  <div>
    <div class="pozadina">
      <img src="@/components/pozadina2.jpg" alt="" />
    </div>
    <div
      class="position-absolute bottom-0 start-50 translate-middle-x mb-5 text-center"
    >
      <div class="bold fs-1 text-light mb-4">
        Welcome to<br />
        <span class="VECE"> GymTracker </span>
      </div>
      <button
        @click="goToNextPage"
        type="button"
        class="btn btn-outline-light btn-lg"
      >
        Get started
      </button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goToNextPage() {
      this.$router.push("/personalData");
    },
  },
};
</script>
<style>
.pozadina {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -999;
}
.bold {
  font-weight: bold;
}
.VECE {
  font-size: 50px;
  font-weight: bold;
}
.pozadina img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
