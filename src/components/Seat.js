import styled from 'styled-components';
import {useState} from 'react'


function Seat({id, number, isAvailable, chosenSeats, setChosenSeats}) {


    const [seatSelected, setSeatSelected] = useState(false)


    function seatVerification() {
        if(isAvailable === false) {
            alert("this seat is not available");
            return;
        } else {
            setSeatSelected(!seatSelected);
            if(!seatSelected === true && !chosenSeats.includes(id)) {
                setChosenSeats([...chosenSeats, id])
            }
            if(!seatSelected === false && chosenSeats.includes(id)) {
                setChosenSeats([...chosenSeats].filter((value) => value !== id))
                }
        }
    }

    console.log(chosenSeats)

    return (
        <SeatSession className="circle" isAvailable={isAvailable} seatSelected={seatSelected} onClick={seatVerification} >
            <p>{number}</p>
        </SeatSession>

    );
}

export default Seat;

const SeatSession = styled.div`
    cursor: pointer;
    background-color: ${props => props.isAvailable === true ? "#C3CFD9" : "#FBE192"};
    background-color: ${props => props.seatSelected === true ? "#8DD7CF" : ""}
`;


/* seatSelected, setSeatSelected */
/* seatSelected={seatSelected} setSeatSelected={setSeatSelected} */