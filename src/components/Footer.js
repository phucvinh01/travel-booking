import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Footer = () => {
    const location = useLocation()
    const [hide, setHide] = useState(false)
    useEffect(() => {
        if (location.pathname == '/login' || location.pathname == '/register') {
            setHide(true)
        }
        else {
            setHide(false)
        }
    })
    return (
        <> { !hide &&
            <footer className='container m-2'>
                <div className='row'>
                    <div className='col-lg-3 col-md-6 col-sm-12 px-3'>
                        <img className='w-25 footer-logo' src='https://i.pinimg.com/736x/2b/03/8f/2b038f755119f785195dad7ed6862307.jpg' alt='logo'>
                        </img>
                        <p className='mb-1'>Vinh we love you so muchhhhhhhhhhhhhhhhhhhhhhhhhh</p>
                        <ul className='d-flex gap-3 p-0'>
                            <li><i className="fa-brands fa-youtube px-3 fs-4"></i></li>
                            <li><i className="fa-brands fa-square-github px-3 fs-4"></i></li>
                            <li><i className="fa-brands fa-square-facebook px-3 fs-4"></i></li>
                            <i className="fa-brands fa-square-instagram px-3 fs-4"></i>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 px-3'><h5>Discover</h5>
                        <ul className='p-0 list-group'>
                            <li className='list-group-item ps-0'><NavLink to={ "/" }>Home</NavLink></li>
                            <li className='list-group-item ps-0'><NavLink to={ "/about" }>About</NavLink></li>
                            <li className='list-group-item ps-0'><NavLink to={ "/tours" }>Tours</NavLink></li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 px-3'><h5>Quick Links</h5>
                        <ul className='p-0 list-group'>
                            <li className='list-group-item ps-0'><NavLink to={ "/about" }>Gallery</NavLink></li>
                            <li className='list-group-item ps-0'><NavLink to={ "/about" }>Login</NavLink></li>
                            <li className='list-group-item ps-0'><NavLink to={ "/about" }>Register</NavLink></li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12 px-3'><h5>Contact</h5>
                        <ul className='p-0 list-group'>
                            <li className='ps-0 border-0 d-flex align-items-center gap-3 list-group-item'>
                                <h6 className='ps-0 mb-0 d-flex align-items-center gap-2'>
                                    <span>
                                        <i className="fa-solid fa-location-dot"></i>
                                    </span>Address:
                                </h6><p className="mb-0 fs-6">Vinh-Hand-Some</p>
                            </li>
                            <li className='ps-0 border-0 d-flex align-items-center gap-3 list-group-item'>
                                <h6 className='ps-0 mb-0 d-flex align-items-center gap-2'>
                                    <span>
                                        <i className="fa-regular fa-envelope"></i></span>Email:
                                </h6>
                                <p className="mb-0 fs-6">nguyenphucvinh1920@gmail.com</p>
                            </li>
                            <li className='ps-0 border-0 d-flex align-items-center gap-3 list-group-item'>
                                <h6 className='ps-0 mb-0 d-flex align-items-center gap-2'>
                                    <span>
                                        <i className="fa-solid fa-phone"></i>
                                    </span>Phone:
                                </h6>
                                <p className="mb-0 fs-6">0344362989</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        }


        </>
    )
}

export default Footer