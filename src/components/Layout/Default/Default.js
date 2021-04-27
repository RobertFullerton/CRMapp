import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import './default.css';

export const LogoHeader = ({ children }) => {
    return (
            <div className="default-layout">
                <header className="header">
                    <Header/>
                </header>
                <main className="main">
                    {children} 
                </main>
                <footer className="footer">
                    <Footer/>
                </footer>
            </div>
    )
}
