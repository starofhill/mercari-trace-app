export const ADD_SEARCH_WORD = "ADD_SEARCH_WORD";
export const addSearchWordAction = (searchWord: string) => {
  return {
    type: "ADD_SEARCH_WORD",
    payload: searchWord,
  };
};

export const ADD_CATEGORY = "ADD_CATEGORY";
export const addCategoryAction = (category: string) => {
  return {
    type: "ADD_CATEGORY",
    payload: category,
  };
};

export const RESET_SEARCH_WORD = "RESET_SEARCH_WORD";
export const resetSearchWordAction = () => {
  return {
    type: "RESET_SEARCH_WORD",
  };
};

export const RESET_CATEGORY = "RESET_CATEGORY";
export const resetCategoryAction = () => {
  return {
    type: "RESET_CATEGORY",
  };
};

export const DELETE_SEARCH_WORD = "DELETE_SEARCH_WORD";
export const deleteSearchWordAction = () => {
  return {
    type: "DELETE_SEARCH_WORD",
  };
};
