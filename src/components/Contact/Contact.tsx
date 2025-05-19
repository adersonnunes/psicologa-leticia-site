import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contact-section section" id="contato">
      <div className="container">
        <h2 className="section-title">Contato</h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Endereço</h3>
                <p>Av. Juscelino Kubitscheck, 1070</p>
                <p>Jardim Panorama, Ipatinga - MG</p>
                <p>35164-245</p>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Telefone</h3>
                <p>
                  <a href="https://wa.me/5531988555476" target="_blank" rel="noopener noreferrer">
                    (31) 98855-5476
                  </a>
                </p>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>E-mail</h3>
                <p>
                  <a href="mailto:leticiacarvalho.psicologia@gmail.com">
                    leticiacarvalho.psicologia@gmail.com
                  </a>
                </p>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fab fa-instagram"></i>
              <div>
                <h3>Instagram</h3>
                <p>
                  <a href="https://www.instagram.com/psicologa.leticia.carvalho" target="_blank" rel="noopener noreferrer">
                    @psicologa.leticia.carvalho
                  </a>
                </p>
              </div>
            </div>
            
            <div className="contact-map">
              <h3>Localização</h3>
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.1123606369716!2d-42.53690548508461!3d-19.47013868687098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa5a5982f19a75f%3A0x8e97d8e0a8ac7d0!2sAv.%20Juscelino%20Kubitschek%2C%201070%20-%20Jardim%20Panorama%2C%20Ipatinga%20-%20MG%2C%2035164-245!5e0!3m2!1spt-BR!2sbr!4v1621436289012!5m2!1spt-BR!2sbr" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Localização do consultório"
                ></iframe>
              </div>
            </div>
          </div>
          
          <div className="contact-form">
            <h3>Envie uma mensagem</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Assunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">Enviar mensagem</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
