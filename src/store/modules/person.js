import PersonService from "@/services/PersonService.js";

export const namespaced = true;

export const state = {
  persons: [],
  personsTotal: 0,
  person: {},
  perPage: 3
};

export const mutations = {
  ADD_PERSON(state, person) {
    state.persons.push(person);
  },
  SET_PERSONS(state, persons) {
    state.persons = persons;
  },
  SET_PERSONS_TOTAL(state, personsTotal) {
    state.personsTotal = personsTotal;
  },
  SET_PERSON(state, person) {
    state.person = person;
  }
};

export const actions = {
  createPerson({ commit, dispatch }, person) {
    return PersonService.postPerson(person)
      .then(() => {
        commit("ADD_PERSON", person);
        commit("SET_PERSON", person);
        const notification = {
          type: "success",
          message: "Your person has been created!"
        };
        dispatch("notification/add", notification, { root: true });
      })
      .catch(error => {
        const notification = {
          type: "error",
          message: "There was a problem creating your person: " + error.message
        };
        dispatch("notification/add", notification, { root: true });
        throw error;
      });
  },
  fetchPersons({ commit, dispatch, state }, { page }) {
    return PersonService.getPersons(state.perPage, page)
      .then(response => {
        commit(
          "SET_PERSONS_TOTAL",
          parseInt(response.headers["x-total-count"])
        );
        commit("SET_PERSONS", response.data);
      })
      .catch(error => {
        const notification = {
          type: "error",
          message: "There was a problem fetching persons: " + error.message
        };
        dispatch("notification/add", notification, { root: true });
      });
  },
  fetchPerson({ commit, getters, state }, id) {
    if (id == state.person.id) {
      return state.person;
    }

    var person = getters.getPersonById(id);

    if (person) {
      commit("SET_PERSON", person);
      return person;
    } else {
      return PersonService.getPerson(id).then(response => {
        commit("SET_PERSON", response.data);
        return response.data;
      });
    }
  }
};
export const getters = {
  getPersonById: state => id => {
    return state.persons.find(person => person.id === id);
  }
};
