import React, { useEffect } from 'react'
import { useState } from 'react';
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom"
import Offcanvas from './Offcanvas'
const Header = () => {
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
        <>
            {
                !hide && <header className='sticky-sm-top sticky-top header px-3'>
                    <div className='container-fluid'>
                        <div className='row pt-1'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <div className='logo col-lg-2 col-md-5 col-sm-5'>
                                    <img className='' style={ { width: "60px" } } src='https://i.pinimg.com/736x/2b/03/8f/2b038f755119f785195dad7ed6862307.jpg'>
                                    </img>
                                </div>
                                <div className='col-lg-8  navbar-reponsive'>
                                    <nav className="navbar navbar-expand-lg">
                                        <div className="container-fluid">
                                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                                <ul className="navbar-nav me-auto mb-2 mb-lg-0  mx-auto">
                                                    <li className="nav-item px-3">
                                                        <NavLink className="nav-link fs-20" aria-current="page" to={ "/" }>Home</NavLink>
                                                    </li>
                                                    <li className="nav-item px-3">
                                                        <NavLink className="nav-link fs-20" to={ "/about" }>About</NavLink>
                                                    </li>
                                                    <li className="nav-item px-3">
                                                        <NavLink className="nav-link fs-20" to={ "/tours" }>Tours</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                                <div className='col-lg-2 text-end'>
                                    {/* <> <span> Wellcome { user.name }</span> <Link to={ "/" } onClick={ handleLogout } className='header-btn__logout'>Log out</Link> </> : */ }
                                    <Link className=" btn-login btn" to={ '/login' }>Login</Link>
                                </div>
                                <Offcanvas />
                            </div>
                        </div>
                    </div>
                </header>
            }

        </>
    )
}

export default Header