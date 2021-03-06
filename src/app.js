
import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { setTextFilter } from './actions/filters';
import { addExpense } from './actions/expenses'
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase';
// import './playground/promises';


const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 4500}))
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000}))
store.dispatch(addExpense({ description: 'Rent', amount: 109500}))

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));

