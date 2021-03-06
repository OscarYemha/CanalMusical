import { ADD_CART } from "../constant";

const initialState = {
  cart: [],
  virtualCart: [],
  orders: [],
  compras: [],
  totalCart: [],
  reviews: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART":
      return Object.assign({}, state, { cart: action.cart });
    case "ADD_VIRTUAL_CART":
      return Object.assign({}, state, { virtualCart: action.virtualCart });
    case "ADD_ORDERS":
      return Object.assign({}, state, { orders: action.orders });
    case "MIS_COMPRAS":
      return Object.assign({}, state, { compras: action.compras });
    case "TOTAL_CART":
      return Object.assign({}, state, { totalCart: action.total });
    case "MIS_REVIEWS":
      return Object.assign({}, state, { reviews: action.reviews });
    default:
      return state;
  }
};
