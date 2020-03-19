import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  timeout: 10000
});

export default {
  getPersons(perPage, page) {
    return apiClient.get("/person?_limit=" + perPage + "&_page=" + page);
  },
  getPerson(id) {
    return apiClient.get("/person/" + id);
  },
  postPerson(person) {
    return apiClient.post("/person", person);
  }
};

//mounted () {
//  axios
//    .get('http://localhost:8081/person/list/')
//    //.get('https://api.chucknorris.io/jokes/random')
//    .then(response => (this.info = response))
//}
