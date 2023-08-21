import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink, Link } from "react-router-dom"

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button onClick={ handleShow } className='btn-offcanvas'>
                <i className="fa-solid fa-bars"></i>
            </Button>

            <Offcanvas show={ show } onHide={ handleClose } backdrop="static" placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <img className='' style={ { width: "50px" } } src='https://i.pinimg.com/736x/2b/03/8f/2b038f755119f785195dad7ed6862307.jpg'>
                        </img>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0  mx-auto">
                        <li className="nav-item px-3">
                            <NavLink className="nav-link fs-20" aria-current="page" to={ "/" }
                                onClick={ handleClose }
                            >Home</NavLink>
                        </li>
                        <li className="nav-item px-3">
                            <NavLink className="nav-link fs-20" to={ "/about" }
                                onClick={ handleClose }
                            >About</NavLink>
                        </li>
                        <li className="nav-item px-3">
                            <NavLink className="nav-link fs-20" to={ "/tours" }
                                onClick={ handleClose }
                            >Tours</NavLink>
                        </li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Example;