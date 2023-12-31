import React, { useState, useContext } from 'react';
import { Button, Modal, FloatingLabel, Form, Stack } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { authLogin } from '../service/AuthService'
import { UserContext } from '../context/UserContext'
import { useNavigate, Link } from "react-router-dom";
import './ModalLogin.css'
import validator from 'validator';
import FacebookLogin from 'react-facebook-login'
import { GoogleLogin } from '@react-oauth/google';
const ModalLogin = (props) => {

    const { show, handleClose, handleShowRegister } = props
    const [errorEmail, setErrorEmail] = useState(null)
    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    const responseFacebook = (response) => {
        console.log(response);
    }
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };
    // State
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async () => {
        if (!email || !password) {
            toast.dismiss("Missing information..")
        }
        else if (!validator.isEmail(email)) {
            setErrorEmail("Please, enter valid Email!")
        }
        else {

            console.log(email);
            let res = await authLogin(email, password)
            if (res && res.token) {
                localStorage.setItem('token', res.token)
                login(email, res.token)
                handleClose()
                navigate("/")
            }
            else {
                if (res.status === 400) {
                    toast.error("Email or password not match")
                }
            }
        }
    }
    return (
        <>

            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <h2 className='text-center py-3'>Join with us</h2>
                    <form className="login-form">
                        <img src="https://i.pinimg.com/736x/2b/03/8f/2b038f755119f785195dad7ed6862307.jpg" alt="logo" className="login-logo mb-3"></img>

                        <div className="form-outline mb-4">
                            <FloatingLabel
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control maxLength="20" pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i" type="email" placeholder="name@example.com"
                                    onChange={ (e) => setEmail(e.target.value.trim()) }
                                />
                            </FloatingLabel>
                            { errorEmail && <strong className='text-danger'>{ errorEmail }</strong> }
                        </div>


                        <div className="form-outline mb-3">
                            <FloatingLabel label="Password">
                                <Form.Control minLength={ 8 } type="password" placeholder="Password"
                                    onChange={ (e) => setPassword(e.target.value.trim()) } />
                            </FloatingLabel>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">

                            <div className="form-check mb-0">
                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                <label className="form-check-label" htmlFor="form2Example3">
                                    Remember me
                                </label>
                            </div>
                            <a href="#!" className="text-body">Forgot password?</a>
                        </div>

                        <div className="text-center text-lg-start mt-4 pt-2">
                            <button type="button" className="btn btn-login d-block w-100"
                                onClick={ handleLogin }
                            >Login</button>
                            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a
                                className="link-danger" onClick={ handleShowRegister }>Register</a></p>
                        </div>
                        <p className='text-center py-2'><strong >Or</strong></p>
                        <Stack direction="vertical" className='justify-content-center mb-5'>
                            <FacebookLogin
                                appId="1088597931155576"
                                fields="name,email,picture"
                                cssClass="btn btn-pri d-block fs-5 mb-1 w-100"
                                callback={ responseFacebook }
                            >
                            </FacebookLogin>
                            <GoogleLogin onSuccess={ responseMessage } onError={ errorMessage } />
                        </Stack>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalLogin;