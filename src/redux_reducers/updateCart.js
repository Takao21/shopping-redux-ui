const updateCartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, "item"];
    case "REMOVE":
      return state.slice(0, state.length - 1);
    default:
      return state;
  }
};

export default updateCartReducer;