import {useState, useEffect} from 'react';
import HotelService from '../services/HotelService';
import BookingList from '../components/BookingList';
import BookingForm from '../components/BookingForm';

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
            <BookingList bookings={bookings} deleteBooking={deleteBooking} />
            <BookingForm createBooking={createBooking}/>
        </>
    )
}
export default HotelContainer