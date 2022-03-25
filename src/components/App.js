import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from "./Header";
import HomePage from "./HomePage";
import SessionsTimes from "./SessionsTimes";

import "./../css/reset.css"
import "./../css/style.css"


function App() {
    return (
        <BrowserRouter>
            <Header />
            {/* <SessionsTimes /> */}
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/filme/:idFilme" element={<SessionsTimes />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;