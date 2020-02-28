
import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import 'normalize.css/normalize.css';
import './styles/styles.scss'



const ExpenseDashboardPage = () => (
    <div>
        Post some stuff
    </div>
);

const AddExpensePage = () => (
    <div>
        Hey
    </div>
);

const EditExpensePage = () => (
    <div>
        editing
    </div>
);

const HelpPage = () => (
    <div>
        Help me
    </div>
);

const NotFoundPage = () => (
    <div>
        404 -<Link to='/'>Go Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to='/create' activeClassName='is-active'>Create Expense</NavLink>
        <NavLink to='/edit' activeClassName='is-active'>Edit Expense</NavLink>
        <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
        <NavLink to='/' exact activeClassName='is-active'>Dashboard</NavLink>
    </header>
)


const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={ExpenseDashboardPage}/>
                <Route path='/create' component={AddExpensePage}/>
                <Route path='/help' component={HelpPage}/>
                <Route path='/edit' component={EditExpensePage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('app'))
