export const addToCart = (item) => {
  return {
    type: "ADD",
    payload: item || {},
  };
};

export const removeLastItem = () => {
  return {
    type: "REMOVE",
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
