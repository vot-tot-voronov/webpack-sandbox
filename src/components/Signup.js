import React, { useState, useRef } from 'react'
import {Button, Form, Alert, Card} from 'react-bootstrap'
import {useHistory, Link} from 'react-router-dom'
import {useAuth} from '../context/AuthContext';

export const Signup = () => {
    const {signup} = useAuth()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const history = useHistory()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfRef = useRef()

    const hundleSumbit = async (e) => {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfRef.current.value) {
            return setError('These two passwords are different')
        }
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch (error) {
            setError("Faild to create an account")
        }
        setLoading(false)
        history.push('/')
    }
    return (
        <div>
            <Card>
                <Card.Body>
                    <h2 className="text-center">Instagram</h2>
                    <p className="text-center text-muted mb-4">Sign up to see photos and videos from your friends.</p>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={hundleSumbit}>
                        <Form.Group controlId="Email">
                            <Form.Control type="email" ref={emailRef} placeholder="Email" />
                        </Form.Group>
                        <Form.Group controlId="Password" >
                            <Form.Control type="password" ref={passwordRef} placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="PasswordConfirm" >
                            <Form.Control type="password" ref={passwordConfRef} placeholder="Confirm password" />
                        </Form.Group>
                        <Button 
                            disabled={loading} variant="primary" className="w-100 mt-3" type="submit">
                            Sign up
                        </Button>
                    </Form>
                    <p className="text-center text-muted mt-3">
                        Already have an account?
                        <Link to='/login'> Log in</Link>
                    </p>
                </Card.Body>
            </Card>
        </div>
    )
}
