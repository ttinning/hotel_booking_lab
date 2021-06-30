import { useState, useEffect } from "react";

const BookingFilter = ({filter, filterDate}) => {
    const [searchName, setSearchName] = useState("")
    const [searchArrivalDate, setSearchArrivalDate] = useState("")

    useEffect(() => {
        filter(searchName)
    }, [searchName])

    useEffect(() => {
        filterDate(searchArrivalDate)
    }, [searchArrivalDate])

    const handleSubmit = (evt) => {
        evt.preventDefault()
    }

    const changeSearchName = (evt) => {
        evt.preventDefault()
        setSearchName(evt.target.value)
    }
    
    const changeSearchArrivalDate = (evt) => {
        evt.preventDefault()
        setSearchArrivalDate(evt.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                placeholder="Filter By Name"
                onChange={changeSearchName}
                />
            </form>
            <form onSubmit={handleSubmit}>
            <input type="date"
                onChange={changeSearchArrivalDate}
                />
            </form>
        </div>


    )
}

export default BookingFilter