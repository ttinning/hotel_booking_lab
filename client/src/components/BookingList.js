import BookingItem from "./BookingItem";

const BookingList = ({bookings, deleteBookings}) => {

    return (
        <div>
            <h1>This is the booking</h1>
            {bookings.map(booking => {
                return (
                    <BookingItem 
                    key={booking._id} 
                    booking={booking}
                    deleteBookings={deleteBookings}
                    />
                )
            })}
        </div>
    )
} 

export default BookingList