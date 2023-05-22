const {Booking} = require('../models/index');

class BookingRepository{
    async createBooking(data){
        try{
            const response = await Booking.create(data);
            return response;
        }
        catch(error){
            console.log("error in repository layer");
            throw {error};
        }
    }
}

module.exports = BookingRepository;