import axios from 'axios';



const getData = (page) => {
    const url = 'https://pexelsdimasv1.p.rapidapi.com/v1/curated'
    const options = {

        params: {
            per_page: '8',
            page: page
        },
        headers: {
            Authorization: 'NN6Q30Nah6WAjvBsDaVZZTPiwLWRchrwwVhVof4ZnEZ06YKmjc0gbSQ2',
            'X-RapidAPI-Key': 'daf6dbeaedmsh26a0f4ee4d599a6p15635ejsnab3bd23a5ff9',
            'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
        }
    };
    return axios.get(url, options)
}

export { getData } 