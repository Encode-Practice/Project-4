import axios from 'axios';

// backend ipfs url

export default axios.create({
    baseURL: 'https://xxx.ipfs.com',
    timeout: 35000
});