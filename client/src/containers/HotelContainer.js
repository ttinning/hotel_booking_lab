import {useState, useEffect} from 'react';
import HotelService from '../services/HotelService';
import BookingList from '../components/BookingList';
import BookingForm from '../components/BookingForm';
import BookingFilter from '../components/BookingFilter';

const HotelContainer = () => {

    const [bookings, setBookings] = useState([]);
    const [filteredBookings, setFilteredBookings] = useState([])

    useEffect(() => {
        HotelService.getBookings()
        .then(bookings => (setBookings(bookings), setFilteredBookings(bookings)))
    }, [])

    const createBooking = newBooking => {
        HotelService.postBooking(newBooking)
        .then(savedBooking => (setBookings([...bookings, savedBooking]), setFilteredBookings([...bookings, savedBooking])))
    }

    const deleteBooking = idToDelete => {
        HotelService.deleteBooking(idToDelete)
        .then(() => {
            setBookings(bookings.filter(booking => booking._id !== idToDelete))
        })
    }

    const filter = (searchTerm) => {
        const prepareSearch = searchTerm.toLowerCase()
        const filteredBookings = bookings.filter((booking) => {
            return booking.guestName.toLowerCase().indexOf(prepareSearch) > -1
        })
        setFilteredBookings(filteredBookings)
    }

    const filterDate = (searchTerm) => {
        const filteredBookings = bookings.filter((booking) => {
            return booking.arrivalDate === searchTerm
        })
        setFilteredBookings(filteredBookings)
    }

    return (
        <>
            <h1>Bookings</h1>
            <BookingForm createBooking={createBooking}/>
            <BookingFilter filter={filter} filterDate={filterDate}/>
            <BookingList bookings={filteredBookings} deleteBooking={deleteBooking} />
        </>
    )
}
export default HotelContainer