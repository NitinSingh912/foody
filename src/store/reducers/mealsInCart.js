const mealsInCart = (state = [], action) => {
  switch (action.type) {
    case "ADD_IN_CART":
      let isMealAvailable = state.find(
        (i) => i.idMeal === action.payload.idMeal
      );
      if (isMealAvailable) {
        return state.map((items) => {
          if (items.idMeal === action.payload.idMeal) {
            return {
              ...items,
              quantity: items.quantity + 1,
            };
          } else {
            return items;
          }
        });
      } else {
        return [...state, { ...action.payload, quantity: Number(1) }];
      }
    case "REMOVE_FROM_CART":
      let makingNewState = state.filter((i) => i.idMeal !== action.payload);

      return makingNewState;
    default:
      return state;
  }
};
export default mealsInCart;
