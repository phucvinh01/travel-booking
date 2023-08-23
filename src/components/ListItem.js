import React, { useEffect, useState } from 'react'
import Item from './Item'
import { Link } from 'react-router-dom'

const ListItem = (props) => {

    const { title, subtitle, data, isLoading } = props
    return (
        <> { isLoading ? <div className='container py-3' >
            <h3>{ title }</h3>
            <h5>{ subtitle }</h5>
            <div className='row justify-content-center'>
                { data && data.map((item, index) => {
                    return (<Item
                        key={ index }
                        photographer={ item.photographer }
                        src={ item.src.medium }
                        height={ item.height }
                    />)
                }) }
            </div>
            <div className='text-center'><Link className='btn-blue p-2 fs-4 fw-bolder' to={ "/" }>Xem Thêm Tour</Link></div>
        </div> : <p>Loading</p> }
        </>

    )
}

export default ListItem