import { SUBMIT_SEARCH_QUERY, submitSearchQuery } from "../actions/actions";

function search(state = [], action) {
  switch (action.type) {
    case SUBMIT_SEARCH_QUERY:
      return [
        ...state,
        {
          query: action.query,
        },
      ];
    default:
      return state;
  }
}

export default search;
