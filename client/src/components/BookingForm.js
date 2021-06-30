import {useState } from 'react';

const BookingForm = ({ createBooking }) => {

    const [guestName, setGuestName] = useState('')
    const [guestEmail, setGuestEmail] = useState('')
    const [arrivalDate, setArrivalDate] = useState('')
    const [checkedStatus, setCheckStatus] = useState(false)

    const handleGuestNameChange = event => setGuestName(event.target.value)
    const handleGuestEmailChange = event => setGuestEmail(event.target.value)
    const handleArrivalDateChange = event => setArrivalDate(event.target.value)
    const handleCheckStatusChange = event => setCheckStatus(event.target.checked)

    const handleSubmit = event => {
        event.preventDefault()
        const booking = {
            guestName,
            guestEmail,
            arrivalDate,
            checkedStatus
        }
        createBooking(booking)
        setGuestName('')
        setGuestEmail('')
        setArrivalDate('')
        setCheckStatus(false)
        document.querySelector('#form').reset()

    }

    return (
        <form id="form" onSubmit={handleSubmit}>
            <label>Guest Name: </label>
            <input
            type="text"
            value={guestName}
            onChange={handleGuestNameChange}
            required
            />

            <label>Guest Email: </label>
            <input
            type='text'
            value={guestEmail}
            onChange={handleGuestEmailChange}
            required
            />

            <label>Enter Arrival Date: </label>
            <input
            type="date"
            value={arrivalDate}
            onChange={handleArrivalDateChange}
            required
            />

            <label>Check-In Status: </label>
            <input
            type='checkbox'
            value={true}
            onChange={handleCheckStatusChange}
            />

            <input type="submit" value="Save"/>
        </form>
    )
}

export default BookingForm