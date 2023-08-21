import React, { useState, useContext } from 'react';
import { Modal, FloatingLabel, Form, } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { authRegister } from '../service/AuthService'
import { useNavigate, } from "react-router-dom";
import './ModalLogin.css'

const ModalLogin = (props) => {

    const { showRegister, handleCloseRegister } = props

    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeat, setRepeat] = useState("")

    const handleRegister = async () => {
        if (!name || !email || !password || !repeat) {
            toast.dismiss("Missing information....")
        }
        else if (password != repeat) {
            toast.error("Password not match.....")
        }
        else {
            let res = await authRegister(email, password)
            if (res && res.id) {
                setTimeout(() => {
                    toast.success("Register successful..")
                }, 2000)
                navigate('/login')
            }
            else {
                if (res.status === 400) {
                    toast.error("Register unsuccessful..")
                }
            }
        }
    }

    return (
        <>

            <Modal show={ showRegister } onHide={ handleCloseRegister }>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <h4 className='text-center py-3'>Join with us</h4>
                    <form className="mx-1 mx-md-3 register-form">

                        <div className="d-flex flex-row align-items-center mb-3">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Your Name"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder="name@example.com" onChange={ (e) => setName(e.target.value) } />
                                </FloatingLabel>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-3">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Your Email"
                                    className="mb-3"
                                >
                                    <Form.Control type="email" placeholder="name@example.com"
                                        onChange={ (e) => setEmail(e.target.value) }
                                    />
                                </FloatingLabel>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-3">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Password"
                                    className="mb-3"
                                >
                                    <Form.Control type="password"
                                        placeholder="name@example.com"
                                        onChange={ (e) => setPassword(e.target.value) }
                                    />
                                </FloatingLabel>
                            </div>
                        </div>

                        <div className="d-flex flex-row aligpn-items-center mb-3">
                            <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Repeat Your Password"
                                    className="mb-3"
                                >
                                    <Form.Control type="password"
                                        placeholder="name@example.com"
                                        onChange={ (e) => setRepeat(e.target.value) }
                                    />
                                </FloatingLabel>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button onClick={ handleRegister } type="button" className="btn btn-danger d-block py-2">Register</button>
                        </div>

                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalLogin;