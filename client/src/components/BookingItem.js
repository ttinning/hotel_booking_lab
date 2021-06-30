const BookingItem = ({ booking, deleteBooking}) => {
    
    const handleDeleteClick = () => {
        deleteBooking(booking._id)
    }

    return (
        <div>
            <h1>This is a booking</h1>
            <h2>Guest Name: {booking.guestName}</h2>
            <h3>Email: {booking.guestEmail}</h3>
            <p>Checked In: {booking.checkedStatus}</p>
            <button 
            type="button"
            onClick={handleDeleteClick}
            >Delete
            </button>
        </div>
    )
}

export default BookingItem