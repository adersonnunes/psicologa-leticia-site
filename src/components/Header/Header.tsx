import React, { useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <h1>Letícia Alves Carvalho</h1>
          <p>Psicóloga | CRP 0443633</p>
        </div>
        
        <div className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#quem-sou" onClick={() => setMenuOpen(false)}>Quem Sou</a></li>
            <li><a href="#servicos" onClick={() => setMenuOpen(false)}>Serviços</a></li>
            <li><a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a></li>
            <li><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
