import BookingItem from "./BookingItem";

const BookingList = ({bookings, deleteBooking}) => {

    return (
        <div>
            {bookings.map(booking => {
                return (
                    <BookingItem 
                    key={booking._id} 
                    booking={booking}
                    deleteBooking={deleteBooking}
                    />
                )
            })}
        </div>
    )
} 

export default BookingList