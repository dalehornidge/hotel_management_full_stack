import react, {useState, useEffect} from 'react'
import { postBooking } from '../BookingService'

const BookingForm = ({addBooking}) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checked_in: "",
    })


    const onChange = (e) => {
        const newFormData = Object.assign({}, formData);
        newFormData[e.target.name] = e.target.value;
        setFormData(newFormData)

    }

    const onSubmit = (e) => {
        e.preventDefault()
        postBooking(formData)
            .then(data => {
                console.log('DATA', data)
                addBooking(data)
            })   
            .catch(console.log("Error in error"))
    } 




    return ( 

        <>
        <h2>Booking Form</h2>
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Name</label>
            <input onChange={onChange} id="name" label="name" name="name"/>
            <label htmlFor="email">Email</label>
            <input onChange={onChange} type="email" id="email" name="email" />
            <label htmlFor="checked-in">Checked-in?</label>
            <input onChange={onChange} type="checkbox" name="checked_in" />
            <input type="submit" />
        </form>
        </>
     );
}
 
export default BookingForm;