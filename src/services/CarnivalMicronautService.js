import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://localhost:7000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  timeout: 10000
});

export default {
  getVertices(perPage, page) {
    // this is all to ignore perPage and page, which will be used later for
    // pagination
    if (perPage && page) {
      page == 0;
    }
    return apiClient.get("/graph/vertices");
  },
  postVertex(vertex) {
    return apiClient.post("/graph/vertex", vertex);
  },
  checkModel() {
    return apiClient.get("/graph/validation/check-model");
  },
  checkConstraints() {
    return apiClient.get("/graph/validation/check-constraints");
  }
};
