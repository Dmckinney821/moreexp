
import React from 'react';
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { setTextFilter } from './actions/filters';
import { addExpense } from './actions/expenses'
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss'

const store = configureStore();
store.dispatch(addExpense({ description: 'Water bill'}))
store.dispatch(addExpense({ description: 'Gas bill'}))
store.dispatch(setTextFilter('Water'))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

console.log(store.getState())
ReactDOM.render(<AppRouter />, document.getElementById('app'))
