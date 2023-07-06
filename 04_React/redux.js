=============== slice ===============

import { createSlice } from '@reduxjs/toolkit'

const initialState= {

// 초기값 설정

    count : 1,
    color : ,
    colors : ,
}

export const counterSlice = createSlice({

// name 작성

    name : 'count',
    initialState,

// 함수 설정

    reducers : {
	a(state,action){
	}

    }
})

// 함수 내보내기

export const { a } = counterSlice.actions
export default counterSlice.reducer

=============== index ===============

import { configureStore } from "@reduxjs/toolkit";

// 변수명 선언

import counter from './modules/counterSlice'

export const store = configureStore({
    reducer: {

// reducer 작성

        counter,
    }
})

=============== main ===============

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// store, provider 호출

import { store } from './store'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

// provider store로 감싸기

    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>,
)

=============== counter ===============

// dispatch, selecotor, 함수 import

import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store/modules/counterSlice';

const Counter = () => {
								// index reducer 안의 키 값 선택
	// 가져올 키 값
	const { count } = useSelector(state => state.counter)
	const { color } = useSelector(state => state.counter)
	const dispatch = useDispatch()

	return (

// 변수, 함수 호출
		<div className="Counter">
			<h1 style={{ color: color }}> 숫자: {count}</h1>
			<div className="btn-wrapper">
				<button onClick={()=>dispatch(increment())}>+</button>
				<button onClick={()=>dispatch(decrement())}>-</button>
			</div>
		</div>
	);
};

export default Counter;

