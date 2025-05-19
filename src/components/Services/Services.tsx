import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  return (
    <section className="services-section section" id="servicos">
      <div className="container">
        <h2 className="section-title">Serviços</h2>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-user"></i>
            </div>
            <h3>Terapia Individual Presencial</h3>
            <p>
              Atendimentos no consultório localizado em Ipatinga – um espaço confortável 
              e sigiloso para acolher você com empatia e profissionalismo.
            </p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-video"></i>
            </div>
            <h3>Terapia Online</h3>
            <p>
              Ideal para quem deseja cuidar da saúde mental com flexibilidade e segurança, 
              no conforto da sua casa. Sessões realizadas via videochamada com a mesma 
              ética e compromisso.
            </p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-heart"></i>
            </div>
            <h3>Terapia para Mulheres</h3>
            <p>
              Acolhimento terapêutico voltado às demandas emocionais femininas: autoestima, 
              relacionamentos, sobrecarga, ansiedade, entre outros.
            </p>
          </div>
        </div>
        
        <div className="services-cta">
          <h3>Vamos conversar?</h3>
          <a 
            href="https://wa.me/5531988555476?text=Olá! Gostaria de agendar uma sessão com a Psicóloga Letícia." 
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar sua sessão
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
