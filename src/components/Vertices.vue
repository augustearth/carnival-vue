<template>
  <div class="flex flex-col rounded bg-gray-200 p-2">
    <span class="bg-gray-500 text-white mb-2 text-2xl"
      >Vertices ({{ vertex.vertices.length }})</span
    >
    <div class="flex flex-col">
      <div
        v-for="vertex in sortedVertices"
        v-bind:key="vertex.vertexId"
        class="bg-white odd:bg-gray-300 text-left flex flex-col"
      >
        <span class="font-semibold"
          >{{ vertex.vertexId }}: {{ vertex.vertexLabel }}</span
        >
        <table v-if="vertex.properties" class="table-auto">
          <thead>
            <tr>
              Properties ({{
                Object.keys(vertex.properties).length
              }})
            </tr>
          </thead>
          <tbody>
            <tr v-for="(value, name) in vertex.properties" v-bind:key="name">
              <td>{{ name }}</td>
              <td>{{ value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
//import _ from "lodash";
import { mapState } from "vuex";
//import store from "@/store/store";

export default {
  computed: {
    sortedVertices() {
      return this.vertex.vertices
        .slice()
        .sort((a, b) => (a.vertexId < b.vertexId ? 1 : -1));
    },
    ...mapState(["vertex"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
