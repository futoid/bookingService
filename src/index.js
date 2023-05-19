const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const {PORT} = require('./config/serverConfig');
function bookingServer(){
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended  :true}));

    app.listen(PORT , () => {
       console.log(`Server running at ${PORT}`); 
    });
}

bookingServer();