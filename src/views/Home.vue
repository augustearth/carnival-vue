<template>
  <div class="home">
    <p>{{ name }}</p>

    <img
      alt="Vue logo"
      src="../assets/carnival-squash.jpg"
      width="25%"
      height="25%"
    />

    <p class="text-blue-400 hover:bg-blue-400 hover:text-white">
      Going to TailwindCSS this all up... no more Bootstrap.
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    /*HelloWorld*/
  },
  data() {
    return {
      name,
      showAlert: false
    };
  }
};
</script>
