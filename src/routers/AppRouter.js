import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react';
import NotFoundPage from '../components/NotFoundPage'
import EditExpensePage from '../components/EditExpensePage'
import AddExpensePage from '../components/AddExpensePage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import HelpPage from '../components/HelpPage'
import Header from '../components/Header';





const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route exact path='/' component={ExpenseDashboardPage}/>
            <Route path='/create' component={AddExpensePage}/>
            <Route path='/help' component={HelpPage}/>
            <Route path='/edit/:id' component={EditExpensePage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
</BrowserRouter>
)

export default AppRouter;
