const BookingItem = ({ booking, deleteBooking}) => {
    
    const handleDeleteClick = () => {
        deleteBooking(booking._id)
    }

    return (
        <div>
            <h1>This is a booking</h1>
            <h2>Guest Name: {booking.guest_name}</h2>
            <h3>Email: {booking.email}</h3>
            <p>Checked In: {booking.check_status}</p>
            <button 
            type="button"
            onClick={handleDeleteClick}
            >
            </button>
        </div>
    )
}

export default BookingItem