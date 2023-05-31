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

    async updateBooking(bookingId, data){
        try{
            const booking = await Booking.findByPk(bookingId);
            if(data.status){
                booking.status= data.status;
            }
            await booking.save();
            return booking;
        }
        catch(error){
            console.log("Error in Repository Layer");
            throw{error};
        }
    }
}

module.exports = BookingRepository;