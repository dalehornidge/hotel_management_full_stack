import Booking from "./Booking";

const BookingDisplay = ({bookings, onDelete}) => {

    const allBookings = bookings.map( booking => <Booking booking={booking} onDelete={onDelete}/>)

    return ( 
        <>

        {allBookings}
        </>
     );
}
 
export default BookingDisplay;