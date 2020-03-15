// import { Vue } from "./node_modules/vue/dist/vue.js";
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

var app = new Vue({
  el: '#app',
  data: function() { 
  	return {
    	name: '',
    	message: 'WHAT THE FUCK!',
    	info: null
  	}
  },
  computed: {
    showAlert() {
      return this.name.length > 4 ? true : false
    }
  },
  mounted () {
    axios
      .get('http://localhost:8081/person/list/')
      //.get('https://api.chucknorris.io/jokes/random')
      .then(response => (this.info = response))
  }  
})
