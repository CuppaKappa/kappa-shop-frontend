import React, { useReducer } from 'react';

function addItem(state, action) {
  const newState = [...state, action.payload.item];
  localStorage.setItem('cart', JSON.stringify(newState));
  return newState;
}

function updateItem(state, action) { }

function deleteItem(state, action) {
  const newState = state.filter(item => item.id !== action.payload.item.id);
  localStorage.setItem('cart', JSON.stringify(newState));
  return newState;
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return addItem(state, action);
    case 'UPDATE_ITEM':
      return updateItem(state, action);
    case 'DELETE_ITEM':
      return deleteItem(state, action);
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function useCart(initialValue) {
  const [state, dispatch] = useReducer(cartReducer, initialValue);
  const isBrowser = typeof window !== "undefined" && window.localStorage;

  return {
    cart: isBrowser ? JSON.parse(localStorage.getItem('cart')) : state,
    addItem: item => dispatch({
      type: 'ADD_ITEM',
      payload: { item }
    }),
    updateItem: item => dispatch({
      type: 'UPDATE_ITEM',
      payload: { item }
    }),
    deleteItem: item => dispatch({
      type: 'DELETE_ITEM',
      payload: { item }
    })
  };
}

export default useCart;
