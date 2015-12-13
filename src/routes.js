import React from 'react'
import {Route, IndexRoute} from 'react-router'
import HTML from './components/html/html'
import Home from './pages/home/home'
import Error from './pages/error/error'

export default (
    <Route path='/' component={HTML}>
        <IndexRoute component={Home} />
        <Route path="*" component={Error} />
    </Route>
);