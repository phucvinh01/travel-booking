import { useContext } from 'react';
import React from 'react'
import { Link } from 'react-router-dom';
import _ from 'lodash'
import { Card, Stack } from 'react-bootstrap';

const Item = (props) => {


    console.log("check proprs", props);
    // const sumRating = _.sumBy(props.reviews && props.reviews, 'rating')
    // const avg = _.round(sumRating / (props.reviews && props.reviews.length))
    return (
        <>
            <div className='col-lg-3 col-md-6 col-sm-12 p-2'>
                {/* <Card key={ props.key }>
                    <Card.Img variant="top" style={ { height: '17rem' } } src={ props.photo } />
                    <Card.Body>
                        <Card.Title>{ props.title }</Card.Title>
                        <div className='card-rate  mb-3'>
                            <p><strong>8.3 Rất tốt</strong> | <small>6 đánh giá</small> </p>
                        </div>
                        <div className=''>
                            <div className='card-time d-flex justify-content-between mb-3'>
                                <Stack direction="horizontal" gap={ 2 }><i class="fa-regular fa-clock"></i> 5 Ngày 4 đêm</Stack>
                                <Stack direction="horizontal" gap={ 2 }><i class="fa-solid fa-plane"></i><i class="fa-solid fa-car"></i></Stack>
                            </div>

                            <div className='card-discount'>
                                <p className='text-end text-muted text-decoration-line-through'>{ props.price }</p>
                            </div>
                            <div className='card-price'>
                                <p className='text-end text-danger fs-4'>{ props.discount }</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card> */}
                <div className="trip__card mb-3">
                    <img src={ props.src } alt="trip" style={ { height: "400px" } } />
                    <div className="trip__details">
                        <p>{ props.photographer }</p>
                        <div className="rating"><i className="ri-star-fill"></i> 4.2</div>
                        <div className="booking__price">
                            <div className="price"><span>From</span> $ { props.height }</div>
                            <button className="book__now">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item