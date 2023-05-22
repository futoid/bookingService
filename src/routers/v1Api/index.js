const express = require('express');
const router = express.Router();

const UserConroller = require('../../controllers/booking-controllers');

router.post('/book' , UserConroller.create);

module.exports = {
    v1ApiRoutes : router
}