import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Content from "./page/Content";
import WishList from "./page/Wishlist";

function App() {
    return (
        <div className="app">
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Content />} />
                    <Route path="/wishlist" element={<WishList />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
