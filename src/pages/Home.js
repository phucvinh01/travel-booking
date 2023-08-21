import React, { useState } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import { SearchFrom } from '../components/SearchFrom';
const Home = () => {
    return (
        <>
            {/* Banner */ }
            <section className='home-banner p-4 position-relative'>
                <div className='home-content p-3 rounded-3'>
                    <h3 className='text-white'>Du lịch theo cá tính</h3>
                    <h6 className='text-white'>Trải nghiệm trọn vẹn - Giá cả phải chăng</h6>
                    <SearchFrom />
                </div>
            </section>

            {/*History  */ }
            <section className='container my-3'>
                <div className='row mx-auto'>
                    <div className='col-4'>
                        <div className='d-flex align-center gap-3 p-3'>
                            <img src='https://www.ivivu.com/du-lich/content/img/icon-support.svg'></img>
                            <div >
                                <p className='m-0'><strong>Tư Vấn Chuyên Nghiệp</strong></p>
                                <p className='m-0'><small>Hỗ trợ nhiệt tình, chăm sóc chu đáo</small></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='d-flex align-center gap-3 p-3'>
                            <img src='https://www.ivivu.com/du-lich/content/img/icon-location.svg'></img>
                            <div >
                                <p className='m-0'><strong>Trải Nghiệm Đa Dạng</strong></p>
                                <p className='m-0'><small>Chọn tour phù hợp, giá tour hợp lý</small></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='d-flex align-center gap-3 p-3'>
                            <img src='https://www.ivivu.com/du-lich/content/img/icon-payment.svg'></img>
                            <div >
                                <p className='m-0'><strong>Thanh Toán An Toàn</strong></p>
                                <p className='m-0'><small>Linh hoạt, rõ ràng, bảo mật</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home