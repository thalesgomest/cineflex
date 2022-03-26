import styled from 'styled-components';
import { Link } from 'react-router-dom'

function OrderData() {
    return (
        <OrderDataScreen>
            <div className="sucess">
                <h1>Pedido feito com sucesso</h1>
            </div>
            <div className="data">
                <p>Filme e sessão</p>
                <p>Enola Holmes</p>
                <p>24/06/2011 15:00</p>
            </div>
            <div className="data">
                <p>Ingressos</p>
                <p>Map de assentos</p>
            </div>
            <div className="data">
                <p>Comprador</p>
                <p>Nome: Thales Gomes</p>
                <p>CPF: 105.166.146.30</p>
            </div>
            <div className="button_align">
                <Link to="/">
                    <button>Voltar pra Home(s)</button>
                </Link>
            </div>
        </OrderDataScreen>
    );
}

export default OrderData;

const OrderDataScreen = styled.div`

    .sucess {
        text-align: center;
        margin: auto;
        width: 160px;
        height: 56px;
    }

    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #247A6B;
        margin-top:94px;
    }

    .data {
        margin-left: 28px;
        margin-bottom: 30px;
    }

    .data p:first-child {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        margin-bottom: 5px;
    }

    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        margin-bottom: 5px;
    }


    button {
    width: 225px;
    height: 42px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF;
    background: rgba(232, 131, 58, 1);
    border-radius: 3px;
    border: none;
    margin-top: 62px;
    margin-bottom: 189px; 
    cursor: pointer;
    }

    .button_align {
        text-align: center;
    }


`