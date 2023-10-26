// productReducer.js


const productState = {
  products : [],
  error : "",
  msg : "",
  edit : false,
  editProductState : null,
  dialog: false


}

const productReducer = (state = productState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return { ...state, products: action.payload.products };
    case 'ADD_PRODUCT':
      return { ...state, products: [action.payload, ...state.products] };
    case 'UPDATE_PRODUCT':
      console.log(action.payload)
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.payload.id),
      };
    case 'EDIT_PRODUCT_STATE':
      console.log(action.payload)
      return { ...state, editProductState: action.payload , edit : !state.edit};

    case "SET_DIALOG":
      return {...state, dialog : !state.dialog}
    default:
      return state;
  }
};

export default productReducer;

  