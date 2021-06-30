use current_bookings
db.dropDatabase()

db.bookings.insertMany([
    {
        guestName: "Gary Darnell",
        guestEmail: "GazzaD@aol.co.uk",
        checkedStatus: "False"
    },
    {
        guestName: "Tristan Tinning",
        guestEmail: "Trissa@aol.co.uk",
        checkedStatus: "False"
    },
    {
        guestName: "Aly Smith",
        guestEmail: "AlyBally@aol.co.uk",
        checkedStatus: "True"
    }
]);