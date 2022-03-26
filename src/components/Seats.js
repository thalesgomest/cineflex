import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Footer from './Footer';

import Loading from './../assets/loading.gif'


function Seats() {

    const {idSessao} = useParams();
    const [seats,setSeats] = useState({})

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then((response) => {
            const {data} = response;
            console.log(data)
            setSeats(data);
        });
        promise.catch((error) => {console.log(error.response);})
    },[idSessao]);

    

    return Object.keys(seats).length !== 0 ? (
        <>
            <SeatsScreen>
                    <h1>Selecione o(s) assento(s)</h1>
                    <div className="seats">
                    </div>
                    <div className="legend">
                        <div className="legend__marker">
                            <div className="circle__selected"></div>
                            <p>Selecionado</p>
                        </div>
                        <div className="legend__marker">
                            <div className="circle__available"></div>
                            <p>Disponível</p>
                        </div>
                        <div className="legend__marker">
                            <div className="circle__unavailable"></div>
                            <p>Indisponível</p>
                        </div>         
                    </div>
            </SeatsScreen>
            <Footer posterURL={seats.movie.posterURL} title={seats.movie.title} sessionData={{weekday: seats.day.weekday, time: seats.name}} />
        </>
    ) :  <LoadingScreen>
            <img src={Loading} alt="loading" />
        </LoadingScreen>

}

export default Seats;

const SeatsScreen = styled.div`
        h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #293845;
        text-align: center;
        margin-top: 108px;
        margin-bottom: 22px;
    }


    .circle {

    }

    .legend {
        display: flex;
        justify-content: space-evenly;
    }

    .legend__marker {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .circle__selected {
        background: #8DD7CF;
        border: 1px solid #45BDB0;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        margin-bottom: 7px;
    }

    .circle__available {
        background: #C3CFD9;
        border: 1px solid #7B8B99;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        margin-bottom: 7px;
    }

    .circle__unavailable {
        background: #FBE192;
        border: 1px solid #F7C52B;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        margin-bottom: 7px;
    }


`

const LoadingScreen = styled.div`

    //centralizar loading.gif
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -100px 0 0 -100px;

    img {
    width: 200px;
    height:200px;
    }
`

