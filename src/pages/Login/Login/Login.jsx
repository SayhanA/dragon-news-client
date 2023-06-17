import React, { useContext } from 'react';
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();  
    const location = useLocation();
    console.log("login page location",location);
    const from = location.state?.from?.pathname || '/category/0';
    // console.log(from)

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    return (
        <Container className='w-25 pt-5 mx-auto'>
            <h3>Please LogIn</h3>
            <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary w-100" type="submit">
                    LogIn
                </Button>
                <br />
                <div className='d-flex justify-content-between'>
                    <Form.Text className='text-black'>
                        Don't have an account?<Link to='/register'>Register</Link>
                    </Form.Text>
                    <Form.Text><Link>forgot password</Link></Form.Text>
                </div>
                <br />
                <Form.Text className="text-success">
                    We'll never share your email with anyone else.
                </Form.Text>
                <br />
                <Form.Text className="text-danger">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;