import React from 'react';
import './AboutMe.css';

const AboutMe: React.FC = () => {
  return (
    <section className="about-section section" id="quem-sou">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>
        
        <div className="about-content">
          <div className="about-image">
            <img src="/profile-placeholder.jpg" alt="Psicóloga Letícia Alves Carvalho" />
          </div>
          
          <div className="about-text">
            <p>
              Sou Letícia Alves Carvalho, psicóloga (CRP 0443633), apaixonada pelo comportamento 
              humano e pelo poder transformador do autoconhecimento.
            </p>
            <p>
              Atuo com escuta empática, acolhimento e técnicas baseadas na Psicologia 
              Cognitivo-Comportamental (TCC), ajudando pacientes a lidarem com ansiedade, 
              baixa autoestima, estresse, inseguranças e conflitos emocionais.
            </p>
            <p>
              Acredito que cada pessoa carrega sua história, e meu propósito é caminhar ao lado 
              de quem busca se reconectar consigo mesma.
            </p>
            
            <div className="education">
              <h3>Formação</h3>
              <ul>
                <li>Graduação em Psicologia – Faculdade Unipac de Ipatinga</li>
                <li>Especialização em Saúde Mental</li>
                <li>Cursos em Terapia Cognitivo-Comportamental e Terapia para Mulheres</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
