use current_bookings
db.dropDatabase()

db.bookings.insertMany([
    {
        guestName: "Gary Darnell",
        guestEmail: "GazzaD@aol.co.uk",
        arrivalDate: "2021-07-15",
        checkedStatus: false
    },
    {
        guestName: "Tristan Tinning",
        guestEmail: "Trissa@aol.co.uk",
        arrivalDate: "2021-07-15",
        checkedStatus: false
    },
    {
        guestName: "Aly Smith",
        guestEmail: "AlyBally@aol.co.uk",
        arrivalDate: "2021-07-15",
        checkedStatus: true
    }
]);