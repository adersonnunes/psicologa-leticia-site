import React from 'react';
import './Blog.css';

const Blog: React.FC = () => {
  return (
    <section className="blog-section section" id="blog">
      <div className="container">
        <h2 className="section-title">Reflexões sobre Saúde Mental</h2>
        
        <div className="blog-grid">
          <div className="blog-card">
            <div className="blog-image">
              <img src="/blog-image-1.jpg" alt="Como lidar com a ansiedade no dia a dia" />
            </div>
            <div className="blog-content">
              <h3>Como lidar com a ansiedade no dia a dia</h3>
              <p className="blog-date">Maio 2025</p>
              <p className="blog-excerpt">
                A ansiedade é uma resposta natural do nosso organismo, mas quando se torna excessiva, 
                pode afetar nossa qualidade de vida. Neste artigo, compartilho estratégias práticas 
                para gerenciar a ansiedade no cotidiano.
              </p>
              <a href="#" className="blog-link">Continuar lendo</a>
            </div>
          </div>
          
          <div className="blog-card">
            <div className="blog-image">
              <img src="/blog-image-2.jpg" alt="A importância de dizer não sem culpa" />
            </div>
            <div className="blog-content">
              <h3>A importância de dizer não sem culpa</h3>
              <p className="blog-date">Maio 2025</p>
              <p className="blog-excerpt">
                Estabelecer limites saudáveis é fundamental para nosso bem-estar emocional. 
                Descubra como dizer não de forma assertiva e sem sentir culpa, priorizando 
                seu autocuidado.
              </p>
              <a href="#" className="blog-link">Continuar lendo</a>
            </div>
          </div>
          
          <div className="blog-card">
            <div className="blog-image">
              <img src="/blog-image-3.jpg" alt="Você está cuidando de si ou apenas sobrevivendo?" />
            </div>
            <div className="blog-content">
              <h3>Você está cuidando de si ou apenas sobrevivendo?</h3>
              <p className="blog-date">Maio 2025</p>
              <p className="blog-excerpt">
                Muitas vezes confundimos sobrevivência com autocuidado. Reflita sobre como 
                você tem cuidado da sua saúde mental e descubra práticas que podem transformar 
                sua relação consigo mesmo.
              </p>
              <a href="#" className="blog-link">Continuar lendo</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
