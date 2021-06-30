import {useState } from 'react';

const BookingForm = ({ createBooking }) => {

    const [guestName, setGuestName] = useState('')
    const [guestEmail, setGuestEmail] = useState('')
    const [checkStatus, setCheckStatus] = useState('')

    const handleGuestNameChange = event => setGuestName(event.target.value)
    const handleGuestEmailChange = event => setGuestEmail(event.target.value)
    const handleCheckStatusChange = event => setCheckStatus(event.target.value)

    const handleSubmit = event => {
        event.preventDefault()
        const booking = {
            guestName,
            guestEmail,
            checkStatus
        }
        createBooking(booking)
        setGuestName('')
        setGuestEmail('')
        setCheckStatus('')
    }

    return (
        <form onSubmit={handleSubmit}>
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

            <label>Check-In Status: </label>
            <input
            type='text'
            value={checkStatus}
            onChange={handleCheckStatusChange}
            required
            />

            <input type="submit" value="Save"/>
        </form>
    )
}

export default BookingForm