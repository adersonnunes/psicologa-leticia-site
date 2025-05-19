import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <h3>Letícia Alves Carvalho</h3>
          <p>Psicóloga | CRP 0443633</p>
          <p>Av. Juscelino Kubitscheck, 1070 - Jardim Panorama</p>
          <p>Ipatinga - MG, 35164-245</p>
          <p>
            <a href="mailto:leticiacarvalho.psicologia@gmail.com">
              leticiacarvalho.psicologia@gmail.com
            </a>
          </p>
          <p>
            <a href="https://wa.me/5531988555476">
              (31) 98855-5476
            </a>
          </p>
        </div>
        
        <div className="footer-social">
          <h3>Redes Sociais</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/psicologa.leticia.carvalho" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
        
        <div className="footer-nav">
          <h3>Menu</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#quem-sou">Quem Sou</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Letícia Alves Carvalho - Psicóloga | CRP 0443633</p>
          <p>Este site segue os princípios éticos do Código de Ética Profissional do Psicólogo.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
