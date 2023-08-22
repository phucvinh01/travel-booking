import React, { useEffect, useContext, useState } from 'react'
import { NavLink, Link, useLocation } from "react-router-dom"
import Offcanvas from './Offcanvas'
import { UserContext } from '../context/UserContext'
import { Button, Dropdown } from 'react-bootstrap';
import ModalLogin from './ModalLogin'
import ModalRegister from './ModalRegister'
const Header = () => {
    const { user, logout } = useContext(UserContext)
    const [show, setShow] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleClose = () => setShow(false);
    const handleCloseRegister = () => setShowRegister(false);

    const handleShow = () => setShow(true);
    const handleShowRegister = () => {
        setShowRegister(true)
        setShow(false);
    };
    const handleLogout = () => {
        logout()
    }

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
                !hide && <header className='sticky-sm-top sticky-top header px-3 bg-white'>
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
                                    {/* {
                                        user.auth ? <span className='d-flex justify-content-center'>Wellcome <DropdownMenu name={ user.name } /> </span> : <Link className=" btn-login btn" to={ '/login' }>Login</Link>
                                    } */}
                                    <Dropdown>
                                        <Dropdown.Toggle variant="ligth" id="dropdown-basic"
                                            bsPrefix='none'
                                            className='btn btn-pri py-2 mx-2 '>
                                            <div><i className="fa-regular fa-circle-user "></i>{ user.auth ? <strong className='px-2'>{ user.name }</strong> : <strong className='px-2'>Tài khoản</strong> }</div>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item >
                                                { user.auth ? <><button onClick={ handleLogout } className='btn btn-li'>
                                                    Logout
                                                </button>
                                                    <button className='btn btn-pri'>
                                                        Profile
                                                    </button>
                                                </> : <button className='btn btn-li' onClick={ handleShow }>
                                                    Đăng nhập
                                                </button> }
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </div>
                                <Offcanvas />
                            </div>
                        </div>
                    </div>
                    <ModalLogin
                        show={ show }
                        handleClose={ handleClose }
                        handleShowRegister={ handleShowRegister }
                    />
                    <ModalRegister
                        showRegister={ showRegister }
                        handleCloseRegister={ handleCloseRegister } />
                </header>
            }

        </>
    )
}

export default Header