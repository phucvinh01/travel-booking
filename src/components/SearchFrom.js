import React, { useState, useEffect } from 'react'
import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import { getDataListSelect } from '../service/DataService';
export const SearchFrom = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [dataList, setDataList] = useState([])
    const getDay = () => {
        const dayNumber = new Date(startDate).getDay();

        return dayNumber + 1;
    };

    const getDataList = async () => {
        let res = await getDataListSelect()
        if (res && res.data) {
            setDataList(res.data)
        }
    }

    useEffect(() => {
        getDataList()
    }, [])

    return (
        <Form className='search'>
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Bạn muốn đi đâu?" />
            </Form.Group>
            <div className="row p-2">
                <div className='col-lg-5 col-md-5 col-sm-12 p-1'>
                    <Form.Group className='bg-white p-1 rounded-2'>
                        <Form.Label className='d-block'>Thứ { getDay() } </Form.Label>
                        <DatePicker showIcon className=' form-control' selected={ startDate } onChange={ (date) => setStartDate(date) } />
                    </Form.Group>
                </div>
                <div className='col-lg-5 col-md-5 col-sm-12 p-1'>
                    <Form.Group className='bg-white p-1 rounded-2'>
                        <Form.Label className='text-dark'>Xuất phát từ</Form.Label>
                        <Form.Select className='form-control'>
                            {
                                dataList && dataList.map((item, index) => {
                                    return (<option key={ index } value={ item.name }>{ item.name }</option>)
                                })
                            }
                        </Form.Select>
                    </Form.Group>

                </div>
                <button className='col-lg-2 col-md-2 col-sm-12 btn btn-info'><i className="fa-solid fa-magnifying-glass fs-2 text-white"></i></button>
            </div>
        </Form>
    )
}
