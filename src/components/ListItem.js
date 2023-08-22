import React from 'react'
import Item from './Item'
import { Link } from 'react-router-dom'

const ListItem = (props) => {

    const { title, subtitle } = props
    return (
        <div className='container py-3'>
            <h3>{ title }</h3>
            <h5>{ subtitle }</h5>
            <div className='row justify-content-center'>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
            <div className='text-center'><Link className='btn-blue p-2 fs-4 fw-bolder' to={ "/" }>Xem Thêm Tour</Link></div>
        </div>
    )
}

export default ListItem