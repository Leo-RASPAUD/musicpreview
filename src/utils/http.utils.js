import axios from 'axios';

const get = async ({ url, headers }) =>
    axios({
        method: 'get',
        url,
        headers: headers || {},
    });

export default {
    get,
};
