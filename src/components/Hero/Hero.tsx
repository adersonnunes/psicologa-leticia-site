import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Cuidar da sua saúde mental é um ato de amor-próprio</h1>
        <p>
          Seja bem-vindo(a)! Sou Letícia Alves Carvalho, psicóloga dedicada a ajudar você a 
          compreender suas emoções, desenvolver sua autoestima e viver com mais equilíbrio e leveza.
        </p>
        <div className="hero-buttons">
          <a 
            href="https://wa.me/5531988555476?text=Olá! Gostaria de agendar uma consulta presencial em Ipatinga com a Psicóloga Letícia." 
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar Consulta Presencial (Ipatinga)
          </a>
          <a 
            href="https://wa.me/5531988555476?text=Olá! Gostaria de agendar uma consulta online com a Psicóloga Letícia." 
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar Consulta Online
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
