export const addToCart = () => {
  return {
    type: "ADD",
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
