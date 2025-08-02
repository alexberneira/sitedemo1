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
              <p>Atendimento humano, tecnologia de ponta e resultados que transformam vidas.</p>
              
              <div style={{ marginBottom: '40px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: '#ffd700', fontSize: '1.5rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}>⭐</span>
                  ))}
                </div>
                <span style={{ color: 'rgba(255,255,255,0.9)', fontWeight: '500', fontSize: '1.1rem' }}>
                  Mais de 1.200 pacientes atendidos com excelência
                </span>
              </div>
              
              <button className="btn-primary">
                Agendar Consulta
              </button>
            </div>
            
            <div className="card glass" style={{ textAlign: 'center', position: 'relative' }}>
              <div style={{ 
                width: '140px', 
                height: '140px', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                borderRadius: '50%', 
                margin: '0 auto 25px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                boxShadow: '0 15px 35px rgba(102, 126, 234, 0.4)',
                animation: 'fadeInUp 1s ease-out 0.6s both'
              }}>
                <span style={{ color: 'white', fontSize: '3.5rem' }}>👨‍⚕️</span>
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '15px' }}>Dr. Lucas Almeida</h3>
              <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>Especialista em Odontologia Estética</p>
              <div style={{ 
                marginTop: '20px', 
                padding: '15px', 
                background: 'rgba(255,255,255,0.1)', 
                borderRadius: '15px',
                backdropFilter: 'blur(10px)'
              }}>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', margin: 0 }}>
                  "Transformando sorrisos há mais de 10 anos"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Profissional */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
        <div className="container">
          <h2 className="section-title">Conheça o Dr. Lucas Almeida</h2>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#64748b', maxWidth: '900px', margin: '0 auto 70px', lineHeight: '1.8' }}>
            Apaixonado por transformar sorrisos, o Dr. Lucas atua há mais de 10 anos com foco em odontologia estética e funcional. Especialista em Implantes, Lentes de Contato Dental e Ortodontia de última geração, oferece uma experiência segura e personalizada para cada paciente.
          </p>
          
          <div className="grid grid-3">
            <div className="service-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '25px' }}>🎓</div>
              <h3 style={{ fontWeight: 'bold', color: '#2c3e50', marginBottom: '15px', fontSize: '1.3rem' }}>Especializações</h3>
              <p style={{ color: '#64748b', fontSize: '1rem' }}>CRO-SP, Implantes, Estética</p>
              <div style={{ 
                marginTop: '20px', 
                padding: '10px 20px', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                borderRadius: '25px',
                color: 'white',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}>
                Certificado
              </div>
            </div>
            <div className="service-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '25px' }}>⭐</div>
              <h3 style={{ fontWeight: 'bold', color: '#2c3e50', marginBottom: '15px', fontSize: '1.3rem' }}>Experiência</h3>
              <p style={{ color: '#64748b', fontSize: '1rem' }}>10+ anos de atuação</p>
              <div style={{ 
                marginTop: '20px', 
                padding: '10px 20px', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                borderRadius: '25px',
                color: 'white',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}>
                Experto
              </div>
            </div>
            <div className="service-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '25px' }}>🏆</div>
              <h3 style={{ fontWeight: 'bold', color: '#2c3e50', marginBottom: '15px', fontSize: '1.3rem' }}>Reconhecimento</h3>
              <p style={{ color: '#64748b', fontSize: '1rem' }}>Congressos e Certificações</p>
              <div style={{ 
                marginTop: '20px', 
                padding: '10px 20px', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                borderRadius: '25px',
                color: 'white',
                fontSize: '0.9rem',
                fontWeight: '500'
              }}>
                Premiado
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <div className="container">
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: '800', 
            textAlign: 'center', 
            marginBottom: '80px',
            color: 'white',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)'
          }}>
            Tratamentos Premium, Resultados Reais
          </h2>
          
          <div className="grid grid-3">
            <div className="service-card">
              <div style={{ fontSize: '3.5rem', marginBottom: '25px', textAlign: 'center' }}>🦷</div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '20px', textAlign: 'center' }}>Implantes Dentários</h3>
              <p style={{ color: '#64748b', textAlign: 'center', lineHeight: '1.6' }}>
                Recupere sua autoestima com implantes 100% seguros e naturais.
              </p>
              <div style={{ 
                marginTop: '25px', 
                padding: '12px 25px', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                borderRadius: '25px',
                color: 'white',
                fontSize: '0.9rem',
                fontWeight: '600',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                Saiba Mais
              </div>
            </div>
            
            <div className="service-card">
              <div style={{ fontSize: '3.5rem', marginBottom: '25px', textAlign: 'center' }}>💎</div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '20px', textAlign: 'center' }}>Lentes de Contato Dental</h3>
              <p style={{ color: '#64748b', textAlign: 'center', lineHeight: '1.6' }}>
                Transforme seu sorriso com lentes ultrafinas e naturais.
              </p>
              <div style={{ 
                marginTop: '25px', 
                padding: '12px 25px', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                borderRadius: '25px',
                color: 'white',
                fontSize: '0.9rem',
                fontWeight: '600',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                Saiba Mais
              </div>
            </div>
            
            <div className="service-card">
              <div style={{ fontSize: '3.5rem', marginBottom: '25px', textAlign: 'center' }}>✨</div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '20px', textAlign: 'center' }}>Clareamento a Laser</h3>
              <p style={{ color: '#64748b', textAlign: 'center', lineHeight: '1.6' }}>
                Resultados rápidos e duradouros com tecnologia avançada.
              </p>
              <div style={{ 
                marginTop: '25px', 
                padding: '12px 25px', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                borderRadius: '25px',
                color: 'white',
                fontSize: '0.9rem',
                fontWeight: '600',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                Saiba Mais
              </div>
            </div>
            
            <div className="service-card">
              <div style={{ fontSize: '3.5rem', marginBottom: '25px', textAlign: 'center' }}>🦿</div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '20px', textAlign: 'center' }}>Aparelho Invisível</h3>
              <p style={{ color: '#64748b', textAlign: 'center', lineHeight: '1.6' }}>
                Alinhe seus dentes de forma discreta e confortável.
              </p>
              <div style={{ 
                marginTop: '25px', 
                padding: '12px 25px', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                borderRadius: '25px',
                color: 'white',
                fontSize: '0.9rem',
                fontWeight: '600',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                Saiba Mais
              </div>
            </div>
            
            <div className="service-card">
              <div style={{ fontSize: '3.5rem', marginBottom: '25px', textAlign: 'center' }}>🔍</div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '20px', textAlign: 'center' }}>Check-up e Limpeza</h3>
              <p style={{ color: '#64748b', textAlign: 'center', lineHeight: '1.6' }}>
                Mantenha sua saúde bucal em dia com prevenção.
              </p>
              <div style={{ 
                marginTop: '25px', 
                padding: '12px 25px', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                borderRadius: '25px',
                color: 'white',
                fontSize: '0.9rem',
                fontWeight: '600',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                Saiba Mais
              </div>
            </div>
            
            <div className="service-card">
              <div style={{ fontSize: '3.5rem', marginBottom: '25px', textAlign: 'center' }}>🚨</div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#2c3e50', marginBottom: '20px', textAlign: 'center' }}>Atendimento de Urgência</h3>
              <p style={{ color: '#64748b', textAlign: 'center', lineHeight: '1.6' }}>
                Suporte 24h para emergências odontológicas.
              </p>
              <div style={{ 
                marginTop: '25px', 
                padding: '12px 25px', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                borderRadius: '25px',
                color: 'white',
                fontSize: '0.9rem',
                fontWeight: '600',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                Saiba Mais
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
        <div className="container">
          <h2 className="section-title">O que dizem nossos pacientes</h2>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '60px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', background: 'rgba(255,255,255,0.9)', padding: '20px 30px', borderRadius: '50px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#ffd700', fontSize: '1.8rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))' }}>⭐</span>
              ))}
              <span style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#2c3e50', marginLeft: '15px' }}>4.9</span>
              <span style={{ color: '#64748b', fontSize: '1.1rem' }}>no Google – Avaliações verificadas</span>
            </div>
          </div>
          
          <div className="grid grid-3">
            <div className="testimonial-card">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'white', 
                  fontWeight: 'bold', 
                  marginRight: '20px',
                  fontSize: '1.2rem'
                }}>
                  M
                </div>
                <div>
                  <h4 style={{ fontWeight: 'bold', color: '#2c3e50', fontSize: '1.1rem' }}>Maria Silva</h4>
                  <p style={{ color: '#64748b', fontSize: '0.9rem' }}>São Paulo, SP</p>
                </div>
              </div>
              <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '1rem' }}>
                "Dr. Lucas transformou meu sorriso! Atendimento excepcional e resultados incríveis. Recomendo para todos!"
              </p>
              <div style={{ 
                marginTop: '20px', 
                padding: '8px 16px', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                borderRadius: '20px',
                color: 'white',
                fontSize: '0.8rem',
                fontWeight: '500',
                display: 'inline-block'
              }}>
                ⭐⭐⭐⭐⭐
              </div>
            </div>
            
            <div className="testimonial-card">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'white', 
                  fontWeight: 'bold', 
                  marginRight: '20px',
                  fontSize: '1.2rem'
                }}>
                  J
                </div>
                <div>
                  <h4 style={{ fontWeight: 'bold', color: '#2c3e50', fontSize: '1.1rem' }}>João Santos</h4>
                  <p style={{ color: '#64748b', fontSize: '0.9rem' }}>São Paulo, SP</p>
                </div>
              </div>
              <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '1rem' }}>
                "Profissionalismo e tecnologia de ponta. Meus implantes ficaram perfeitos!"
              </p>
              <div style={{ 
                marginTop: '20px', 
                padding: '8px 16px', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                borderRadius: '20px',
                color: 'white',
                fontSize: '0.8rem',
                fontWeight: '500',
                display: 'inline-block'
              }}>
                ⭐⭐⭐⭐⭐
              </div>
            </div>
            
            <div className="testimonial-card">
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  color: 'white', 
                  fontWeight: 'bold', 
                  marginRight: '20px',
                  fontSize: '1.2rem'
                }}>
                  A
                </div>
                <div>
                  <h4 style={{ fontWeight: 'bold', color: '#2c3e50', fontSize: '1.1rem' }}>Ana Costa</h4>
                  <p style={{ color: '#64748b', fontSize: '0.9rem' }}>São Paulo, SP</p>
                </div>
              </div>
              <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '1rem' }}>
                "Clínica limpa, atendimento humanizado. Dr. Lucas é simplesmente o melhor!"
              </p>
              <div style={{ 
                marginTop: '20px', 
                padding: '8px 16px', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                borderRadius: '20px',
                color: 'white',
                fontSize: '0.8rem',
                fontWeight: '500',
                display: 'inline-block'
              }}>
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <p style={{ fontSize: '1.3rem', color: '#64748b', fontWeight: '500' }}>
              Mais de 3.500 sorrisos atendidos com empatia e excelência
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Agende agora sua avaliação gratuita</h2>
          <p>
            Estamos com poucas vagas disponíveis para este mês. Garanta sua consulta e receba um plano de tratamento totalmente personalizado.
          </p>
          
          <div className="form-container">
            <form style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
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
              <button className="btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                Quero agendar agora
              </button>
            </form>
            <p style={{ fontSize: '1rem', color: '#64748b', marginTop: '25px', textAlign: 'center' }}>
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
              <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '25px' }}>Dr. Lucas Almeida</h3>
              <p style={{ color: '#d1d5db', marginBottom: '40px', fontSize: '1.1rem', lineHeight: '1.6' }}>
                Excelência em odontologia com empatia, inovação e resultados.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <span style={{ color: '#60a5fa', fontSize: '1.2rem' }}>📍</span>
                  <span style={{ color: '#d1d5db', fontSize: '1rem' }}>Rua das Flores, 123 - São Paulo, SP</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <span style={{ color: '#34d399', fontSize: '1.2rem' }}>📱</span>
                  <span style={{ color: '#d1d5db', fontSize: '1rem' }}>(11) 99999-9999</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <span style={{ color: '#60a5fa', fontSize: '1.2rem' }}>📧</span>
                  <span style={{ color: '#d1d5db', fontSize: '1rem' }}>contato@drlucas.com.br</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 style={{ fontSize: '1.4rem', fontWeight: 'bold', marginBottom: '25px' }}>Horário de Atendimento</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: '#d1d5db', marginBottom: '40px', fontSize: '1rem' }}>
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p>Domingo: Fechado</p>
              </div>
              
              <div style={{ display: 'flex', gap: '25px' }}>
                <a href="#" style={{ fontSize: '2rem', color: '#ec4899', textDecoration: 'none', transition: 'all 0.3s ease' }}>
                  📷
                </a>
                <a href="#" style={{ fontSize: '2rem', color: '#ef4444', textDecoration: 'none', transition: 'all 0.3s ease' }}>
                  🔍
                </a>
              </div>
            </div>
          </div>
          
          <div style={{ borderTop: '1px solid #4b5563', marginTop: '50px', paddingTop: '40px', textAlign: 'center', color: '#9ca3af', fontSize: '1rem' }}>
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