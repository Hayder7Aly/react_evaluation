// productActions.js
import axios from 'axios';

import {toast} from "react-toastify"


const notify = msg => {
  toast.success(msg , {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
}


export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    dispatch({ type: 'FETCH_PRODUCTS', payload: response.data });
    notify("Fetching All Products Successfully !")
  } catch (error) {
    // Handle error
    notify("Error Occured !!!")


  }
};

export const addProduct = (productData) => async (dispatch) => {
  try {
    const response = await axios.post('https://dummyjson.com/products/add', productData);
    dispatch({ type: 'ADD_PRODUCT', payload: response.data });
    notify("Product Added Successfully !")

  } catch (error) {
    notify("Error Occured !!!")
    

  }
};

export const updateProduct = (productId, productData) => async (dispatch) => {
  try {
    const response = await axios.put(`https://dummyjson.com/products/${productId}`, productData);
    dispatch({ type: 'UPDATE_PRODUCT', payload: response.data });
    notify("Product Updated Successfully !")

  } catch (error) {
    notify(`Can not update due to Server Premissions !`)

    // Handle error

  }
};




export const deleteProduct = (productId) => async (dispatch) => {
  try {
    const response = await axios.delete(`https://dummyjson.com/products/${productId}`);
    dispatch({ type: 'DELETE_PRODUCT', payload: response.data });
    notify("Product Deleted Successfully !")

  } catch (error) {
    // Handle error
    notify("Error Occured !!!")

  }
};
