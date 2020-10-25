const updateCartReducer = (state = [], action) => {
  let cart = [],
    update = [];
  switch (action.type) {
    case "ADD":
      if (state.length) {
        if (state.some((item) => item.id === action.payload.id)) {
          console.log("Cart is not empty & item already in cart.");
          let existingItem = state.filter(
            (item) => item.id === action.payload.id
          )[0]; // [{...}]
          existingItem.quantity = existingItem.quantity + 1;
          console.log("existing is: ", existingItem);
          let theRest = state.filter((item) => item.id !== action.payload.id); // [{}, {}, {}]
          return [...theRest, existingItem]; // update existing item, keep the rest the same
        } else {
          console.log("Cart is not empty & item does not exist in cart yet.");
          return [
            ...state,
            {
              quantity: 1,
              ...action.payload,
            },
          ];
        }
      }
      console.log("Cart is empty. Adding item...");
      return [
        {
          quantity: 1,
          ...action.payload,
        },
      ];
    case "REMOVE":
      console.log(action.payload);
      return state.filter(
        (item) => action.payload.indexOf(item.id + "") === -1
      );
    case "INCREASE":
      console.log("Increasing qty...");
      cart = state;
      update = cart.map((item) => {
        if (action.payload.includes(item.id + "")) {
          let temp = item;
          temp.quantity = temp.quantity + 1;
          return temp;
        }
        return item;
      });
      return update;
    case "DECREASE":
      console.log("Decreasing qty...");
      cart = state;
      update = cart.map((item) => {
        if (action.payload.includes(item.id + "")) {
          let temp = item;
          temp.quantity = temp.quantity - 1 || 1;
          return temp;
        }
        return item;
      });
      return update;
    default:
      return state;
  }
};

export default updateCartReducer;
