import { createStore, combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {productListReducer, productDetailReducer } from './reducer/productReducer'


const reducer = combineReducers({
  productList : productListReducer ,
  productDetail : productDetailReducer,  
})
const initialState = {}

const middlerware = [thunk]
const store = createStore (reducer ,initialState , applyMiddleware(...middlerware))

export default store