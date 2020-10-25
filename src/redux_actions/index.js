export const addToCart = (item) => {
  alert("Added to Cart.");
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

export const increaseQty = (items) => {
  return {
    type: "INCREASE",
    payload: items || [],
  };
};

export const decreaseQty = (items) => {
  return {
    type: "DECREASE",
    payload: items || [],
  };
};
