const axios = require('axios');

const reqViewData = (url,method)=>{
    return axios({url,method})
}

test("Should get adoteFriends", () =>{
const res = reqViewData('http://localhost:3000/viewadotefriends','GET');
const adoteFriends = res.data;
expect(adoteFriends);

});