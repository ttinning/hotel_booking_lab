const BookingItem = ({ booking, deleteBooking, updateBooking }) => {
    
    const handleDeleteClick = () => {
        deleteBooking(booking._id)
    }

    const handleCheckIn = () => {
        updateBooking(booking._id)
        if (booking.checkedStatus !== true) {
            booking.checkedStatus = true
        }
    }
    


    return (
        <div>
            <h2>Guest Name: {booking.guestName}</h2>
            <h3>Email: {booking.guestEmail}</h3>
            <h4>Arrival Date: {booking.arrivalDate}</h4>
            <p>Checked In: {booking.checkedStatus.toString()}</p>
            <button
            type="button"
            onClick={handleCheckIn}>
                Check Guest In
            </button>
            <button 
            type="button"
            onClick={handleDeleteClick}
            >Delete
            </button>
        </div>
    )
}

export default BookingItem