import ContactItem from "./ContactItem.js"

function Contact(props) {

    return (
        <div>
                {props.contacts.map((info) => (
                    <ContactItem 
                    //general area where to find info
                    key={info.cell}
                    name={info.name}
                    picture={info.picture}
                    cell={info.cell}
                    phone={info.phone}
                    email={info.email}
                    dob={info.dob}
                    location={info.location}
                    />
                ))}
        </div>
    )
}

export default Contact