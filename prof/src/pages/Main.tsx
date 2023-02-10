import React from 'react';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import App from './App';
import Contact from './Contact';
import Plan from './Plan';

function Main() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/plan' element={<Plan />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default Main;
