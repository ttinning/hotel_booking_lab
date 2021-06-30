import BookingItem from "./BookingItem";

const BookingList = ({bookings, deleteBooking, updateBooking}) => {

    return (
        <div>
            {bookings.map(booking => {
                return (
                    <BookingItem 
                    key={booking._id} 
                    booking={booking}
                    deleteBooking={deleteBooking}
                    updateBooking={updateBooking}
                    />
                )
            })}
        </div>
    )
} 

export default BookingList