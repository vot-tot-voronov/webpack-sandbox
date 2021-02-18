import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Container } from 'react-bootstrap'

import {Home} from './Home'
import {Signup} from './Signup'

export const App = () => {
    return (
        <>
            <Signup />
        </>
    )
}
