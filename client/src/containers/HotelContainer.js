import {useState, useEffect} from 'react';
import HotelService from '../services/HotelService';

const HotelContainer = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        HotelService.getBookings()
        .then(bookings => setBookings(bookings))
    }, [])

    const createBooking = newBooking => {
        HotelService.postBooking(newBooking)
        .then(savedBooking => setBookings([...bookings, savedBooking]))
    }

    const deleteBooking = idToDelete => {
        HotelService.deleteBooking(idToDelete)
        .then(() => {
            setBookings(bookings.filter(booking => booking._id !== idToDelete))
        })
    }

    return (
        <>
            <h1>Hotel Container</h1>
        </>
    )
}
export default HotelContainer