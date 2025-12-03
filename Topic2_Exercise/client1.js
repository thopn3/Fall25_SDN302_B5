const axios = require('axios');

// Send request -> Server
axios.get("http://localhost:9999")
    .then(resp => console.log(resp.data))
    .catch(err => console.error(err));