import React from 'react'
import App from './components/App'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import Navbar from './components/Navbar'
import CharInfo from './components/CharInfo'

const paths = [
    {
        path: '/',
        exact: true,
        component: App
    }, {
        path: '/sw/:id/',
        exact: true,
        component: CharInfo
    }
]

function Router() {
    return (
        <BrowserRouter>
            <div className='main-container'>
                <Navbar/>
                <Switch>
                    {paths.map((path, i) => {
                        return(
                            <Route
                                key={`path-${i}`}
                                exact={path.exact || false}
                                path={path.path}
                                component={path.component}
                            />
                        )
                    })}
                    <Redirect to='/' />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Router