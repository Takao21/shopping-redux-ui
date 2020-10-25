export const addToCart = (item) => {
  return {
    type: "ADD",
    payload: item || {},
  };
};

export const removeItem = (items) => {
  return {
    type: "REMOVE",
    payload: items || [],
  };
};

export const prevPage = () => {
  return {
    type: "PREV",
  };
};

export const nextPage = () => {
  return {
    type: "NEXT",
  };
};
