

function ContactItem(props) {
    
    return (
        <div className="contact-item" id={props.name}>
            {/* be specific where to find it */}
            <h3>{props.name.first} {props.name.last}</h3>
            <img src={props.picture.large} alt=''/>
            <h5>Cell: {props.cell}</h5>
            <h5>Phone: {props.phone}</h5>
            <h5>Email: {props.email}</h5>
            <h5>DOB: {props.dob.date}</h5>
            <h5>Location: {props.location.city}, {props.location.state}</h5>
        </div>
    )
}

export default ContactItem