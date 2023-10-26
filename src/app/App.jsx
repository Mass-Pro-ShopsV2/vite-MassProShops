import React from 'react';
import { Footer } from '../features';
import Navbar from '../features/navbar/Navbar';
import AppRoutes from './AppRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div className="mainContentContainer">
            <ToastContainer />
            <Navbar />
            <AppRoutes />
            <Footer />
        </div>
    );
};

export default App;
