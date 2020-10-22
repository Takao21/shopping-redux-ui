const updatePageIndexReducer = (state = 1, action) => {
  switch (action.type) {
    case "NEXT":
      return state < 4 ? state + 1 : state;
    case "PREV":
      return state > 1 ? state - 1 : state;
    default:
      return state;
  }
};

export default updatePageIndexReducer;
