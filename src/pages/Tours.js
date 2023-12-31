import React, { useEffect, useState } from 'react'
import { SearchFrom } from '../components/SearchFrom';
import ListItem from '../components/ListItem';
import { getData } from '../service/FakeLoctionAPI';

const Tours = () => {

    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)

    const get = async (page) => {
        let res = await getData(page)
        console.log(res.data);
        if (res && res.data) {
            setData(res.data.photos)
            setLoading(true)
        }
    }

    useEffect(() => {
        get(1)
    }, [])



    return (
        <div className='container-fluid'>
            {/* Banner */ }
            <section className='home-banner p-4 position-relative container-fluid'>
                <div className='home-content p-3 rounded-3'>
                    <h3 className='text-white'>Du lịch theo cá tính</h3>
                    <h6 className='text-white'>Trải nghiệm trọn vẹn - Giá cả phải chăng</h6>
                    <SearchFrom />
                </div>
            </section>
            {/*History  */ }
            <section className='my-3 container'>
                <div className='row mx-auto'>
                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <div className='d-flex align-center gap-3 p-3'>
                            <img style={ { width: "50px" } } src='https://www.ivivu.com/du-lich/content/img/icon-support.svg'></img>
                            <div >
                                <p className='m-0'><strong>Tư Vấn Chuyên Nghiệp</strong></p>
                                <p className='m-0'><small>Hỗ trợ nhiệt tình, chăm sóc chu đáo</small></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <div className='d-flex align-center gap-3 p-3'>
                            <img style={ { width: "50px" } } src='https://www.ivivu.com/du-lich/content/img/icon-location.svg'></img>
                            <div >
                                <p className='m-0'><strong>Trải Nghiệm Đa Dạng</strong></p>
                                <p className='m-0'><small>Chọn tour phù hợp, giá tour hợp lý</small></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12'>
                        <div className='d-flex align-center gap-3 p-3'>
                            <img style={ { width: "50px" } } src='https://www.ivivu.com/du-lich/content/img/icon-payment.svg'></img>
                            <div >
                                <p className='m-0'><strong>Thanh Toán An Toàn</strong></p>
                                <p className='m-0'><small>Linh hoạt, rõ ràng, bảo mật</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-3 container justify-content-center'>
                <ListItem
                    title={ 'Tour Du Lịch Lễ 2/9' }
                    subtitle={ 'Chơi Lễ Thả Ga, Không Lo Về Giá' }
                    data={ data }
                    isLoading={ isLoading }
                />

                {/* <ListItem
                    title={ 'Tour Nước Ngoài Cao Cấp' }
                    subtitle={ 'Trải Nghiệm Thế Giới, Khám Phá Bản Thân' }
                />

                <ListItem
                    title={ 'Tour Du Lịch Trung Quốc - Hồng Kông - Đài Loan' }
                    subtitle={ 'Thiên Nhiên Cẩm Tú, Lịch Sử Ngàn Năm' }
                />

                <ListItem
                    title={ 'Tour Du Lịch Nhật Bản - Hàn Quốc' }
                    subtitle={ 'Văn Hóa Độc Đáo, Cảnh Sắc Tuyệt Vời' }
                />

                <ListItem
                    title={ 'Tour Du Lịch Châu Âu - Úc - Mỹ' }
                    subtitle={ 'Trải Nghiệm Đẳng Cấp, Nâng Tầm Cuộc Sống' }
                />

                <ListItem
                    title={ 'Tour Siêu Du Thuyền 5 Sao' }
                    subtitle={ 'Trải Nghiệm Thời Thượng, Nâng Tầm Cuộc Sống' }
                />

                <ListItem
                    title={ 'Tour Du Lịch Tây Nguyên' }
                    subtitle={ 'Về Với Đại Ngàn, Ngập Tràn Niềm Vui' }
                />

                <ListItem
                    title={ 'Du Lịch City Breaks Ngắn Ngày' }
                    subtitle={ 'Tái Tạo Năng Lượng, Thư Giãn Tuyệt Vời' }
                />

                <ListItem
                    title={ 'Tour Nội Địa Cao Cấp' }
                    subtitle={ 'Khám Phá Việt Nam - Vẻ Đẹp Bất Tận' }
                />

                <ListItem
                    title={ 'Tour Du Lịch Bằng Xe Lửa' }
                    subtitle={ 'Hành Trình Của Những Ký Ức' }
                />

                <ListItem
                    title={ 'Tour Vi Vu Cuối Tuần' }
                    subtitle={ 'Tận Hưởng Cuộc Sống, Kết Nối Tình Thân' }
                />

                <ListItem
                    title={ 'Tour Trải Nghiệm Địa Phương' }
                    subtitle={ 'Các Điểm Check In Cực Hot' }
                /> */}
            </section>
        </div>
    )
}

export default Tours