import React, { useState, useContext } from 'react';
import { Modal, label, Form, } from 'react-bootstrap'
import { toast } from 'react-toastify';
import { authRegister } from '../service/AuthService'
import { useNavigate, } from "react-router-dom";
import './ModalLogin.css'
import { useFormik } from "formik";
import * as Yup from "yup";
const ModalLogin = (props) => {

    const { showRegister, handleCloseRegister } = props

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
            phone: "",
            password: "",
            confirmedPassword: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Required")
                .min(4, "Must be 4 characters or more"),
            email: Yup.string()
                .required("Required")
                .matches(
                    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    "Please enter a valid email address"
                ),
            password: Yup.string()
                .required("Required")
                .min(6, "Must be 6 characters or more")
                .matches(
                    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/,
                    "Password must be 7-19 characters and contain at least one letter, one number and a special character"
                ),
            confirmedPassword: Yup.string()
                .required("Required")
                .oneOf([Yup.ref("password"), null], "Password must match"),
        }),
        onSubmit: async (values) => {

            console.log(values);
            let res = await authRegister(values.email, values.password)
            if (res && res.id) {
                setTimeout(() => {
                    toast.success("Register successful..")
                }, 1000)
                navigate('/login')
            }
            else {
                if (res.status === 400) {
                    toast.error("Register unsuccessful..")
                }
            }
        },
    });

    return (
        <>

            <Modal show={ showRegister } onHide={ handleCloseRegister }>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <h2 className='text-center py-3'>Join with us</h2>
                    <form className="mx-1 mx-md-3 register-form" id='register'
                        onSubmit={ formik.handleSubmit }>

                        <div className="input-group mb-3">
                            <i className="input-group-text fas fa-user"></i>
                            <div class="form-floating">
                                <input
                                    className='form-control w-100'
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={ formik.values.name }
                                    onChange={ formik.handleChange }
                                    placeholder="Enter your name"></input>
                                <label htmlFor="floatingInput">Your Name</label>
                            </div>
                        </div>
                        { formik.errors.name && (
                            <p className="text-danger"> { formik.errors.name } </p>
                        ) }
                        <div className="input-group mb-3">
                            <i className="fas fa-envelope input-group-text"></i>
                            <div class="form-floating">
                                <input
                                    className='form-control w-100'
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={ formik.values.email }
                                    onChange={ formik.handleChange }
                                    placeholder="Enter your email"></input>
                                <label htmlFor="floatingInput">Email address</label>
                            </div>

                        </div>
                        { formik.errors.email && (
                            <p className="text-danger"> { formik.errors.email } </p>
                        ) }
                        <div className="input-group mb-3">
                            <i className="fas fa-lock input-group-text"></i>
                            <div class="form-floating">
                                <input
                                    className='form-control w-100'
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={ formik.values.password }
                                    onChange={ formik.handleChange }
                                    placeholder="Password"></input>
                                <label htmlFor="floatingInput">Password</label>
                            </div>
                        </div>
                        { formik.errors.password && (
                            <p className="text-danger"> { formik.errors.password } </p>
                        ) }
                        <div className="input-group mb-3">
                            <i className="fas fa-key input-group-text"></i>
                            <div class="form-floating">
                                <input
                                    className='form-control w-100'
                                    type="password"
                                    id="confirmedPassword"
                                    name="confirmedPassword"
                                    value={ formik.values.confirmedPassword }
                                    onChange={ formik.handleChange }
                                    placeholder="Confirmed Password"></input>
                                <label htmlFor="floatingInput">Confirmed Password</label>
                            </div>
                        </div>
                        { formik.errors.confirmedPassword && (
                            <p className="text-danger"> { formik.errors.confirmedPassword } </p>
                        ) }

                        <button type='submit' className="btn btn-danger w-100 d-block py-2 mb-5">Register</button>


                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalLogin;