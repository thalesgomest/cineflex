import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from "./Header";
import HomePage from "./HomePage";
import SessionsTimes from "./SessionsTimes";
import Seats from "./Seats";

import "./../css/reset.css"
import "./../css/style.css"


function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/filme/:idFilme" element={<SessionsTimes />}></Route>
                <Route path="/assentos/:idSessao" element={<Seats />}></Route> 
            </Routes>
        </BrowserRouter>
    );
}

export default App;