import React, { useState, useRef } from 'react'
import {Button, Form, Alert, Card} from 'react-bootstrap'
import {useHistory, Link} from 'react-router-dom'
import {useAuth} from '../context/AuthContext';

export const Login = () => {
    const {login} = useAuth()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const history = useHistory()
    const emailRef = useRef()
    const passwordRef = useRef()

    const hundleSumbit = async (e) => {
        e.preventDefault()
        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
        } catch (error) {
            setError("Faild to log in")
        }
        setLoading(false)
        history.push('/')
    }
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center">Instagram</h2>
                    <p className="text-center text-muted mb-4">Log in to see photos and videos from your friends.</p>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={hundleSumbit}>
                        <Form.Group controlId="Email">
                            <Form.Control type="email" ref={emailRef} placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="Password" >
                            <Form.Control type="password" ref={passwordRef} placeholder="Password" />
                        </Form.Group>
                        <Button 
                            disabled={loading} variant="primary" className="w-100 mt-3" type="submit">
                            Log in
                        </Button>
                    </Form>
                    <p className="text-center text-muted mt-3">
                        Don't have an account?
                        <Link to='/signup'> Sign up</Link>
                    </p>
                </Card.Body>
            </Card>
        </div>
    )
}
