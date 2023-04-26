import { useState, useEffect } from "react";
import BookingDisplay from "../components/BookingDisplay";
import BookingForm from "../components/BookingForm";
import { getBookings } from "../BookingService";
import { deleteBooking } from "../BookingService";

const MainContainer = () => {

const [bookings, setBookings] = useState([])

useEffect( () => {
    getBookings().then( allBookings => {
        setBookings(allBookings)
    })
},[])

const handleAddBooking = (booking) => {
    setBookings([...bookings, booking])
}

const handleOnDelete = (booking) => {
    deleteBooking(booking._id)
    .then(() => {
        const filteredBookings = bookings.filter(eachBooking => eachBooking._id !== booking._id)

        setBookings(filteredBookings)
    })
}

    return ( 
        <>
        <BookingForm addBooking={handleAddBooking}/>
        <BookingDisplay bookings={bookings} onDelete={handleOnDelete}/>
        </>
     );
}
 
export default MainContainer;