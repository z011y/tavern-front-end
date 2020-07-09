import { createStore } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

import search from "../reducers/reducer";

// create your reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case "SUBMIT_QUERY_SEARCH":
      return { ...state, submitQuerySearch: action.payload };
    default:
      return state;
  }
};

// create a makeStore function
const makeStore = (context) => createStore(reducer);

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
