<template>
  <div class="container mx-auto">
    <div class="flex flex-col mb-2"></div>

    <div class="p-2 mb-2 bg-gray-200 rounded flex flex-col">
      <span class="bg-gray-500 text-white mb-2 text-2xl">Create a vertex</span>
      <div class="w-full flex flex-row justify-between mb-2">
        <span class="mr-2">Label:</span>
        <div class="w-full flex flex-col justify-around">
          <input
            type="text"
            class="w-full rounded border-solid border-2 border-blue-500 shadow"
            v-model="vertexLabel"
            v-on:keyup.enter="submitVertex"
          />
        </div>
      </div>
      <div class="w-full flex flex-row-reverse justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          v-on:click="submitVertex"
        >
          Create
        </button>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-2 rounded">
      <Vertices></Vertices>

      <div class="flex flex-col rounded bg-gray-200 p-2">
        <div v-if="modelErrors.length > 0" class="flex flex-col mb-2">
          <span class="bg-gray-500 text-white mb-2 text-2xl">Model Errors</span>
          <div v-for="me in modelErrors" v-bind:key="me.message">
            {{ me.message }}
          </div>
        </div>
        <div v-if="constraintErrors.length > 0" class="flex flex-col">
          <span class="bg-gray-500 text-white mb-2 text-2xl"
            >Constraint Errors</span
          >
          <div v-for="me in constraintErrors" v-bind:key="me.message">
            {{ me.message }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vertices from "@/components/Vertices.vue";
import _ from "lodash";
import { mapState } from "vuex";
import store from "@/store/store";
import CarnivalMicronautService from "@/services/CarnivalMicronautService.js";

export default {
  components: {
    Vertices
  },
  data() {
    return {
      name: "Home",
      vertexLabel: "",
      modelErrors: [],
      constraintErrors: []
    };
  },
  computed: {
    sortedVertices() {
      return this.vertex.vertices
        .slice()
        .sort((a, b) => (a.vertexId < b.vertexId ? 1 : -1));
    },
    ...mapState(["vertex"])
  },
  created: function() {
    this.responseText = this.responseTextPlaceholder;
  },
  methods: {
    submitVertex: function(/*event*/) {
      this.responseText = this.vertexLabel;
      if (_.isEmpty(this.vertexLabel, true)) return;
      store
        .dispatch("vertex/createVertex", { vertexLabel: this.vertexLabel })
        .then(() => {
          this.vertexLabel = "";
          this.validateGraph();
        });
    },
    validateGraph: function() {
      CarnivalMicronautService.checkModel().then(response => {
        //console.log(response);
        this.modelErrors = response.data;
      });
      CarnivalMicronautService.checkConstraints().then(response => {
        //console.log(response);
        this.constraintErrors = response.data;
      });
    }
  },
  mounted: function() {
    store.dispatch("vertex/fetchVertices", { page: 0 });
    this.validateGraph();
  }
};
</script>
