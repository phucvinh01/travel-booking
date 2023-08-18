import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from '../context/UserContext'
import { Button } from 'react-bootstrap';
import { useContext } from 'react';
function BasicExample({ name }) {
    const navigate = useNavigate();
    const { logout } = useContext(UserContext)

    const handleLogout = () => {
        logout()
        navigate('/')
    }
    return (
        <Dropdown autoClose="outside">
            <Dropdown.Toggle variant="ligth" id="dropdown-basic" className='btn btn-pri   p-0 mx-2'>
                <strong>{ name }</strong>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1"><button className='w-100 btn btn-li text-dark' onClick={ handleLogout }><i className="fa-solid fa-arrow-right-from-bracket"></i> Logout</button></Dropdown.Item>
                <Dropdown.Item href="#/action-2"><Link to={ '/' } className='btn btn-pri w-100 text-dark'>Profile</Link></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default BasicExample;