import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';


import Header from "./Header";
import HomePage from "./HomePage";
import SessionsTimes from "./SessionsTimes";
import Seats from "./Seats";
import OrderData from "./OrderData";

import "./../css/reset.css"
import "./../css/style.css"




function App() {

    // const [orderData, setOrderData] = useState({})


    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/filme/:idFilme" element={<SessionsTimes />}></Route>
                <Route path="/assentos/:idSessao" element={<Seats />}></Route>
                <Route path="/sucesso" element={<OrderData />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;