<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="vertex in vertex.vertices" v-bind:key="vertex.vertexId">
      <b-card
        :title="vertexCardTitle(vertex)"
        :sub-title="vertexCardSubTitle(vertex)"
      >
        <ol>
          <li v-for="(value, name) in vertex.properties" v-bind:key="name">
            {{ name }} {{ value }}
          </li>
        </ol>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "@/store/store";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: {
    ...mapState(["vertex"])
  },
  methods: {
    vertexCardTitle: function(vertex) {
      // `this` points to the vm instance
      return "Vertex " + vertex.vertexId;
    },
    vertexCardSubTitle: function(vertex) {
      // `this` points to the vm instance
      return vertex.vertexLabel;
    }
  },
  mounted: function() {
    store.dispatch("vertex/fetchVertices", { page: 0 });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
