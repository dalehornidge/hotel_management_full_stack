const Booking = ({booking, onDelete}) => {
 

    return ( 
        <>
        <h3>{booking.name}</h3>
        <button onClick={() => onDelete(booking)}>Delete</button>
        </>
     );
}
 
export default Booking;