import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
const Register = () => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1)
    };
    return (
        <>
            <section className="vh-100" >
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="text-black" >
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-1">
                                            <button
                                                className="border-0 bg-white mb-5 mx-1 mx-md-4 mt-4"
                                                onClick={ handleGoBack }
                                            >
                                                <i class="fa-solid fa-arrow-left-long"></i>
                                                Back
                                            </button>
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-3">Sign up</p>

                                            <form className="mx-1 mx-md-3 register-form">

                                                <div className="d-flex flex-row align-items-center mb-3">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <FloatingLabel
                                                            controlId="floatingInput"
                                                            label="Your Name"
                                                            className="mb-3"
                                                        >
                                                            <Form.Control type="text" placeholder="name@example.com" />
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
                                                            <Form.Control type="email" placeholder="name@example.com" />
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
                                                                placeholder="name@example.com" />
                                                        </FloatingLabel>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-3">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">
                                                        <FloatingLabel
                                                            controlId="floatingInput"
                                                            label="Repeat Your Password"
                                                            className="mb-3"
                                                        >
                                                            <Form.Control type="password"
                                                                placeholder="name@example.com" />
                                                        </FloatingLabel>
                                                    </div>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button type="button" className="btn btn-danger d-block py-2">Register</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-6 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://i.pinimg.com/236x/71/f6/47/71f6474027188e5548a4910cb6a6e176.jpg"
                                                className="img-fluid img-h-50 img-login" alt="Sample image"></img>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Register