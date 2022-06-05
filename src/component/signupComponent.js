import React, { useState  } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios'
import{
    Input
} from 'reactstrap'

export default function Signup() {

    const navigate = useNavigate();

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    const register = async (e) => {
        if(name && password && email && userRole)
        {
          const res =  await axios.post('http://localhost:5000/api/v1/users/signup' , {
            name,password,userRole : Number(userRole),email
          })
    
          if(res)
          {
            alert('Success')
            console.log(res);
            navigate("/login");
          }
          else
          {
            alert('Something bad happened')
          }
        }
      }
    
    const [userData, setUserData] = useState({})
    const[name,setName] = useState('')
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[userRole,setUserRole] = useState('')
    
    return (
        <div>
            <Form method="POST" onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        autoFocus
                        type="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
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
                <Form.Group check>
                    <Form.Label check>
                        <Input type='radio' name='userRole' value={1} onChange={(e) => setUserRole(e.target.value)} /> Program
                        Associate
                    </Form.Label>
                    </Form.Group>
                    <Form.Group check>
                    <Form.Label check>
                        <Input type='radio' name='userRole' value={2} onChange={(e) => setUserRole(e.target.value)}/> Program
                        Manager
                    </Form.Label>
                  </Form.Group>
                <br></br>
                <Button class="btn btn-success btn-lg" size="lg" type="submit" disabled={!validateForm()} onClick={register}>
                Sign Up
                </Button>

            </Form>
        </div>
    );
}