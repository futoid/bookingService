const {BookingRepository} = require('../repository/index');
const {FLIGHT_SERVICE} = require('../config/serverConfig'); 
const axios = require('axios');

class BookingService {
    constructor(){
        this.bookingRepository = new BookingRepository();
    }

    async createBooking(data){
        try{
            const flightId = data.flighId;
            const flightDataRequestURL = `${FLIGHT_SERVICE}/api/v1/flight/${flightId}`;
            const FetchedFlightData = await axios.get(flightDataRequestURL);            
            const flightData = FetchedFlightData.data.data;
            let flighPrice = flightData.price;

            if(data.noOfSeats > flightData.totalSeats){
                throw {
                    error : 'seats are not available this moment'
                }
            }

            const totalCost = flighPrice * data.noOfSeats;
            const bookingPayload = {...data,totalCost};
            const booking = await this.bookingRepository.createBooking(bookingPayload);
            const updateSeatsURL = `${FLIGHT_SERVICE}/api/v1/flight/update/`;
            await axios.patch(updateSeatsURL , {
                id : flightData.id,
                totalSeats : flightData.totalSeats - data.noOfSeats
            });

            const finalBooking = await this.bookingRepository.updateBooking(booking.id , {
                status : 'Booked'
            });
            return finalBooking;
        }
        catch(error){
            console.log(error);
            throw{error};
        }
    }
}

module.exports = BookingService;