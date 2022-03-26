import styled from 'styled-components';


function Seat({number, available}) {
    return (
        <SeatSession className="circle" available={available}>
            <p>{number}</p>
        </SeatSession>

    );
}

export default Seat;

const SeatSession = styled.div`
    background-color: ${props => props.available === true ? "#C3CFD9" : "#FBE192"}  
`;