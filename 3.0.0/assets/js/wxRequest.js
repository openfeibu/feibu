import axios from 'axios'

const wxRequest = async(params = {}, url) => {
    let data = params.query || {};
    // let res = await axios({
    //     url: url,
    //     method: params.method || 'GET',
    //     data: data,
    //     header: { 'Content-Type': 'application/json' },
    // });
    return 1;
};


export default {
    wxRequest
}
