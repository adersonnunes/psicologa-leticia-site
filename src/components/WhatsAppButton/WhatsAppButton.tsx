import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/5531988555476?text=Olá! Gostaria de agendar uma consulta com a Psicóloga Letícia." 
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contato via WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;
