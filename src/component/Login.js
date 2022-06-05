import React, { useState  } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios"
import jwt from "jwt-decode"
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    const login = async (e) => {
    if(password && email)
        {
            const res =  await axios.post('http://localhost:5000/api/v1/users/login' , {
            password,email
            })

            if(res)
            {
                const token = res.data.token
                const user = jwt(token)
                localStorage.setItem('token',token)
                localStorage.setItem('user',JSON.stringify(user))
                navigate('/dashboard')
            }
            else
            {
            alert('Something bad happened')
            }
        }
    }
    
    return (
        <div className="back" style={{paddingTop: "100px"}}>
            <Form method="POST" onSubmit={handleSubmit} style={{backgroundColor:"white"}}>
            <h3 style={{color:"SlateBlue", textAlign:"center"}}>Login</h3>
            <br></br>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <br></br>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <br></br>
                <Button class="btn btn-success btn-lg" size="lg" type="submit" disabled={!validateForm()} onClick={login}>
                Login
                </Button>
            </Form>
        </div>
    );
    
}
export default Login;