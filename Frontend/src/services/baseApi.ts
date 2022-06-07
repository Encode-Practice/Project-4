import axios from 'axios';

// backend ipfs url

export default axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 35000
});