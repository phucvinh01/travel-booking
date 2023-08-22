import { useContext } from 'react';
import React from 'react'
import { Link } from 'react-router-dom';
import _ from 'lodash'
import { Card, Stack } from 'react-bootstrap';

const Item = (props) => {
    // const sumRating = _.sumBy(props.reviews && props.reviews, 'rating')
    // const avg = _.round(sumRating / (props.reviews && props.reviews.length))
    return (
        <>
            <div className='col-lg-4 col-md-6 col-sm-12 p-2'>
                <Card >
                    <Card.Img variant="top" style={ { height: '17rem' } } src="https://i.pinimg.com/236x/73/a1/b0/73a1b02de1cdb12fcdcca274e6a4739b.jpg" />
                    <Card.Body>
                        <Card.Title>Tour Trung Quốc 6N5Đ : Hà Nội - Hà Khẩu - Đại Lý - Lệ Giang - Shangrila</Card.Title>
                        <div className='card-rate  mb-3'>
                            <p><strong>8.3 Rất tốt</strong> | <small>6 đánh giá</small> </p>
                        </div>
                        <div className=''>
                            <div className='card-time d-flex justify-content-between mb-3'>
                                <Stack direction="horizontal" gap={ 2 }><i class="fa-regular fa-clock"></i> 5 Ngày 4 đêm</Stack>
                                <Stack direction="horizontal" gap={ 2 }><i class="fa-solid fa-plane"></i><i class="fa-solid fa-car"></i></Stack>
                            </div>

                            <div className='card-discount'>
                                <p className='text-end text-muted text-decoration-line-through'>13.990.000 VND</p>
                            </div>
                            <div className='card-price'>
                                <p className='text-end text-danger fs-4'>12.990.000 VND</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}

export default Item