const {BookingRepository} = require('../repository/index');

class BookingService {
    constructor(){
        this.bookingRepository = new BookingRepository();
    }

    async createBooking(data){
        try{
            const response = await this.bookingRepository.createBooking(data);
            return response;
        }
        catch(error){
            console.log(error);
            throw{error};
        }
    }
}

module.exports = BookingService;