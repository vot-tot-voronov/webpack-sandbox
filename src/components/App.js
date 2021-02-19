import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {AuthProvider} from '../context/AuthContext'
import { Container } from 'react-bootstrap'

import {Home} from './Home'
import {Signup} from './Signup'
import {Login} from './Login'
import {PrivateRoute} from './PrivateRoute'

export const App = () => {
    return (
        <>
            <Container
                className="d-flex align-items-center justify-content-center"
                style={{minHeight: "100vh"}}>
                <div className="w-100" style={{maxWidth: "24rem"}}>
                    <Router>
                        <AuthProvider>
                            <Switch>
                                <PrivateRoute exact path="/" component={Home} />
                                <Route path="/signup" component={Signup} />
                                <Route path="/login" component={Login} />
                            </Switch>
                        </AuthProvider>
                    </Router>
                </div>
            </Container>
            
        </>
    )
}
