const BookingItem = ({ booking, deleteBooking}) => {
    
    const handleDeleteClick = () => {
        deleteBooking(booking._id)
    }

    return (
        <div>
            <h2>Guest Name: {booking.guestName}</h2>
            <h3>Email: {booking.guestEmail}</h3>
            <h4>Arrival Date: {booking.arrivalDate}</h4>
            <p>Checked In: {booking.checkedStatus.toString()}</p>
            <button 
            type="button"
            onClick={handleDeleteClick}
            >Delete
            </button>
        </div>
    )
}

export default BookingItem