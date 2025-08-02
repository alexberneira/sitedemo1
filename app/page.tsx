import Image from 'next/image'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div>
              <h1>🦷 Sorria com Confiança</h1>
              <p>Cuide do seu sorriso com quem entende de estética e saúde.</p>
              
              <div style={{ marginBottom: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#ffd700', fontSize: '1.2rem' }}>⭐</span>
                  ))}
                </div>
                <span style={{ color: 'rgba(255,255,255,0.9)', fontWeight: '500' }}>
                  Mais de 1.200 pacientes atendidos
                </span>
              </div>
              
              <button className="btn-primary">
                Agendar Consulta
              </button>
            </div>
            
            <div className="card" style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '120px', 
                height: '120px', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                borderRadius: '50%', 
                margin: '0 auto 20px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center'
              }}>
                <span style={{ color: 'white', fontSize: '3rem' }}>👨‍⚕️</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '10px' }}>Dr. Lucas Almeida</h3>
              <p style={{ color: '#6b7280' }}>Especialista em Odontologia Estética</p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Nossos Tratamentos</h2>
          
          <div className="grid grid-3">
            <div className="card">
              <div style={{ fontSize: '2.5rem', marginBottom: '20px', textAlign: 'center' }}>🦷</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '15px', textAlign: 'center' }}>Implantes</h3>
              <p style={{ color: '#6b7280', textAlign: 'center' }}>
                Recupere sua autoestima com implantes seguros e naturais.
              </p>
            </div>
            
            <div className="card">
              <div style={{ fontSize: '2.5rem', marginBottom: '20px', textAlign: 'center' }}>💎</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '15px', textAlign: 'center' }}>Lentes de Contato</h3>
              <p style={{ color: '#6b7280', textAlign: 'center' }}>
                Transforme seu sorriso com lentes ultrafinas.
              </p>
            </div>
            
            <div className="card">
              <div style={{ fontSize: '2.5rem', marginBottom: '20px', textAlign: 'center' }}>✨</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '15px', textAlign: 'center' }}>Clareamento</h3>
              <p style={{ color: '#6b7280', textAlign: 'center' }}>
                Resultados rápidos com tecnologia avançada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section" style={{ background: '#f8fafc' }}>
        <div className="container">
          <h2 className="section-title">O que dizem nossos pacientes</h2>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'white', padding: '15px 25px', borderRadius: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#ffd700', fontSize: '1.2rem' }}>⭐</span>
              ))}
              <span style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#2c3e50', marginLeft: '10px' }}>4.9</span>
              <span style={{ color: '#6b7280' }}>no Google</span>
            </div>
          </div>
          
          <div className="grid grid-3">
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  background: '#667eea', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'white', 
                  fontWeight: 'bold', 
                  marginRight: '15px'
                }}>
                  M
                </div>
                <div>
                  <h4 style={{ fontWeight: 'bold', color: '#2c3e50' }}>Maria Silva</h4>
                  <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>São Paulo, SP</p>
                </div>
              </div>
              <p style={{ color: '#6b7280' }}>
                "Dr. Lucas transformou meu sorriso! Atendimento excepcional."
              </p>
            </div>
            
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  background: '#667eea', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'white', 
                  fontWeight: 'bold', 
                  marginRight: '15px'
                }}>
                  J
                </div>
                <div>
                  <h4 style={{ fontWeight: 'bold', color: '#2c3e50' }}>João Santos</h4>
                  <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>São Paulo, SP</p>
                </div>
              </div>
              <p style={{ color: '#6b7280' }}>
                "Profissionalismo e tecnologia de ponta. Recomendo!"
              </p>
            </div>
            
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ 
                  width: '50px', 
                  height: '50px', 
                  background: '#667eea', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'white', 
                  fontWeight: 'bold', 
                  marginRight: '15px'
                }}>
                  A
                </div>
                <div>
                  <h4 style={{ fontWeight: 'bold', color: '#2c3e50' }}>Ana Costa</h4>
                  <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>São Paulo, SP</p>
                </div>
              </div>
              <p style={{ color: '#6b7280' }}>
                "Clínica limpa, atendimento humanizado. O melhor!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Agende sua avaliação gratuita</h2>
          <p>
            Estamos com poucas vagas disponíveis. Garanta sua consulta agora.
          </p>
          
          <div className="form-container">
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input
                type="text"
                placeholder="Seu nome"
                className="form-input"
              />
              <input
                type="tel"
                placeholder="WhatsApp"
                className="form-input"
              />
              <select className="form-input">
                <option>Melhor horário</option>
                <option>Manhã</option>
                <option>Tarde</option>
                <option>Noite</option>
              </select>
              <button className="btn-primary" style={{ width: '100%' }}>
                Quero agendar agora
              </button>
            </form>
            <p style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '20px', textAlign: 'center' }}>
              Retornaremos em até 15 minutos via WhatsApp
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>Dr. Lucas Almeida</h3>
              <p style={{ color: '#d1d5db', marginBottom: '30px' }}>
                Excelência em odontologia com empatia e resultados.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <span style={{ color: '#60a5fa' }}>📍</span>
                  <span style={{ color: '#d1d5db' }}>Rua das Flores, 123 - São Paulo, SP</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <span style={{ color: '#34d399' }}>📱</span>
                  <span style={{ color: '#d1d5db' }}>(11) 99999-9999</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '20px' }}>Horário de Atendimento</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: '#d1d5db', marginBottom: '30px' }}>
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
          
          <div style={{ borderTop: '1px solid #374151', marginTop: '40px', paddingTop: '30px', textAlign: 'center', color: '#9ca3af' }}>
            <p>&copy; 2024 Dr. Lucas Almeida. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a href="https://wa.me/5511999999999" className="whatsapp-btn">
        📱
      </a>
    </main>
  )
} 