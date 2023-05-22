const {BookingService} = require('../services/index');

const bookingService = new BookingService();

const create = async(req, res) => {
    try{
        const response = await bookingService.createBooking(req.body);
        return res.status(201).json({
            data : response,
            success : 'true',
            message : 'booking is created',
            error : {}
        })
    }
    catch(error){
        return res.status(500).json({
            data : {},
            success : 'false',
            message : 'not able to book',
            error : {error}
        })
    }
}



module.exports = {
    create
}