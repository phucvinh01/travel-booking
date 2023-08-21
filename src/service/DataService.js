import axios from 'axios'


const getDataListSelect = () => {
    return axios.get(`https://www.ivivu.com/du-lich/data/departurelocation.json`)
}



export { getDataListSelect } 