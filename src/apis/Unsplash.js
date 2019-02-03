import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 0e45fa302842eac42a16ac897856e5f29ec7a676c2cdf838b67640846f2d585a'
    }
});