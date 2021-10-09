import React, { useReducer } from 'react';

function addItem(state, action) {
  return [...state, createItem(state, action.payload.item)];
}

function updateItem(state, action) { }

function deleteItem(state, action) {
  return state.filter(item => item.id !== action.payload.item.id);
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

  return {
    cart: state,
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
