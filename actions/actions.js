export const SUBMIT_SEARCH_QUERY = "SUBMIT_SEARCH_QUERY";

export function submitSearchQuery(query) {
  return {
    type: SUBMIT_SEARCH_QUERY,
    query,
  };
}
