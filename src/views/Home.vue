<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/carnival-squash.jpg" width="25%" height="25%" />
    <b-container>
      <b-jumbotron header="CarnivalVue" lead="Carnival Graph Model Validation">
        <p>For more information visit our website</p>
        <b-btn variant="primary" href="https://github.com/augustearth/carnival-vue">More Info</b-btn>
      </b-jumbotron>

      <b-form-group
        horizontal
        :label-cols="4"
        description="Let us know your name."
        label="Enter your name"
      >
        <b-form-input v-model.trim="name"></b-form-input>
      </b-form-group>

      <b-alert variant="success" :show="showAlert">Hello {{ name }}</b-alert>
      <p>{{ name }}</p>
    </b-container>
    <HelloWorld msg="Welcome to Carnival-Vue" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: { HelloWorld },
  data() {
    return {
      name,
      showAlert: false
    };
  }
};
</script>
