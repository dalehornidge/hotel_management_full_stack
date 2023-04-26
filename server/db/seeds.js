use hotel;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "Erin John",
        email: "erin@gmail.com", 
        checkedin: true,
    },
    {
        name: "Claire Colin",
        email: "claire@gmail.com", 
        checkedin: true,
    },
    {
        name: "Bruno Meera",
        email: "bruno@gmail.com", 
        checkedin: false,
    },
    {
        name: "Steve Killian",
        email: "steve@gmail.com", 
        checkedin: true,
    },
    {
        name: "Sean John",
        email: "sean@gmail.com", 
        checkedin: true,
    }
])