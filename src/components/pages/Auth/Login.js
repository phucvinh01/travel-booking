import React from "react";
import { useNavigate, Link } from "react-router-dom";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
function Login() {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1)
    };
    return (
        <>
            <div className="vh-75 my-5">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center gap-2">
                        <div className="col-4">
                            <img src="https://i.pinimg.com/564x/fd/84/52/fd8452707a6bb89d19ab85274c5a601d.jpg"
                                className="img-fluid w-100 img-h-50 img-login" alt="Sample image"></img>
                        </div>
                        <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12">
                            <form className="login-form">
                                <img src="https://i.pinimg.com/736x/2b/03/8f/2b038f755119f785195dad7ed6862307.jpg" alt="logo" className="login-logo mb-3"></img>
                                <h3 className="mb-3">Login with us</h3>
                                <div className="form-outline mb-4">
                                    <FloatingLabel
                                        controlId="floatingInput"
                                        label="Email address"
                                        className="mb-3"
                                    >
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </FloatingLabel>

                                </div>


                                <div className="form-outline mb-3">
                                    <FloatingLabel controlId="floatingPassword" label="Password">
                                        <Form.Control type="password" placeholder="Password" />
                                    </FloatingLabel>
                                </div>

                                <div className="d-flex justify-content-between align-items-center">

                                    <div className="form-check mb-0">
                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                        <label className="form-check-label" for="form2Example3">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="#!" className="text-body">Forgot password?</a>
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-login d-block w-100"
                                    >Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to={ '/register' }
                                        className="link-danger">Register</Link></p>
                                </div>

                            </form>

                            <div className="text-center my-3">
                                <button
                                    className="border-0 bg-white"
                                    onClick={ handleGoBack }
                                >
                                    <i class="fa-solid fa-arrow-left-long"></i>
                                    Back
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
}

export default Login;