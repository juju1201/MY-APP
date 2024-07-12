import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './Componets/Header';
import Main from './Componets/Main';
import Nav from './Componets/Nav';
import Footer from './Componets/Footer';
import BookingForm from './Componets/BookingForm';

function App() {
  return (
    <Router>
    <Header />
    <Nav />
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<BookingForm />} />
      </Routes>
    <Footer />
  </Router>
  );
}

export default App;
