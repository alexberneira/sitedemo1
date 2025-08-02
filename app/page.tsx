import Image from 'next/image'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>📱 iPhone 16 Pro Max</h1>
          <p>O iPhone mais avançado de todos os tempos. Tecnologia revolucionária em suas mãos.</p>
          <button className="btn-primary">
            Comprar iPhone 16 - 30% OFF
          </button>
        </div>
      </section>

      {/* Product Section */}
      <section className="product-section">
        <div className="container">
          <div className="product-grid">
            <div className="product-image">
              <div style={{
                width: '300px',
                height: '400px',
                background: 'linear-gradient(135deg, #1a1a1a 0%, #333333 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                color: 'white',
                margin: '0 auto',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontSize: '6rem'
                }}>
                  📱
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '20px',
                  right: '20px',
                  background: 'rgba(255,255,255,0.1)',
                  padding: '5px 10px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  color: 'white'
                }}>
                  iPhone 16
                </div>
              </div>
            </div>
            
            <div className="product-info">
              <h2>iPhone 16 Pro Max - Revolução Apple</h2>
              <p>
                Descubra o iPhone mais poderoso já criado. Com chip A18 Pro, câmera de 48MP, 
                tela Super Retina XDR de 6.7" e design em titânio. Uma experiência incomparável.
              </p>
              
              <div className="price">
                <span className="original-price">R$ 9.999</span>
                R$ 6.999
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <p style={{ color: '#ff6b6b', fontWeight: 'bold', fontSize: '1.1rem' }}>
                  ⚡ OFERTA LIMITADA: Apenas 100 unidades disponíveis
                </p>
              </div>
              
              <button className="btn-primary" style={{ fontSize: '1.2rem', padding: '18px 40px' }}>
                🍎 Comprar iPhone 16 Agora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Por que o iPhone 16 é revolucionário?</h2>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Chip A18 Pro</h3>
              <p>
                O chip mais rápido do mundo com 6 núcleos de CPU e 16 núcleos de GPU, 
                oferecendo performance incomparável.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📸</div>
              <h3>Câmera Pro de 48MP</h3>
              <p>
                Sistema de câmera tripla com sensor principal de 48MP, 
                estabilização óptica e zoom óptico de 5x.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🖥️</div>
              <h3>Tela Super Retina XDR</h3>
              <p>
                Display de 6.7" com tecnologia OLED, 120Hz ProMotion e 
                brilho máximo de 2000 nits.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔋</div>
              <h3>Bateria de Longa Duração</h3>
              <p>
                Até 29 horas de reprodução de vídeo e carregamento 
                MagSafe de 20W para máxima conveniência.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Face ID Avançado</h3>
              <p>
                Reconhecimento facial ultrarrápido e seguro, 
                desbloqueando seu iPhone instantaneamente.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>5G Ultra Rápido</h3>
              <p>
                Conectividade 5G de última geração com velocidades 
                de download de até 10Gbps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">O que nossos clientes dizem</h2>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <div className="testimonial-header">
                <div className="testimonial-avatar">C</div>
                <div className="testimonial-info">
                  <h4>Carlos Silva</h4>
                  <p>São Paulo, SP</p>
                </div>
              </div>
              <div className="testimonial-text">
                "Incrível! A câmera é espetacular e a performance é absurda. 
                Valeu cada centavo investido!"
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <div className="testimonial-header">
                <div className="testimonial-avatar">A</div>
                <div className="testimonial-info">
                  <h4>Ana Costa</h4>
                  <p>Rio de Janeiro, RJ</p>
                </div>
              </div>
              <div className="testimonial-text">
                "Melhor iPhone que já tive! Design elegante, 
                câmera profissional e velocidade impressionante."
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <div className="testimonial-header">
                <div className="testimonial-avatar">M</div>
                <div className="testimonial-info">
                  <h4>Marcos Santos</h4>
                  <p>Belo Horizonte, MG</p>
                </div>
              </div>
              <div className="testimonial-text">
                "Performance excepcional! Jogos rodam perfeitamente e 
                a tela é simplesmente incrível."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="guarantee-section">
        <div className="container">
          <div className="guarantee-icon">🛡️</div>
          <h3>Garantia Apple de 1 Ano</h3>
          <p>
            Compre com total segurança! Seu iPhone 16 vem com garantia oficial Apple de 1 ano, 
            incluindo peças e mão de obra. Se não ficar satisfeito, devolvemos seu dinheiro em até 30 dias.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Oferta Exclusiva - Não Perca!</h2>
          <p>
            Apenas 100 unidades disponíveis com 30% de desconto. 
            Garanta o seu iPhone 16 Pro Max antes que acabe!
          </p>
          
          <div className="form-container">
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input
                type="text"
                placeholder="Seu nome completo"
                className="form-input"
              />
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="form-input"
              />
              <input
                type="tel"
                placeholder="WhatsApp"
                className="form-input"
              />
              <select className="form-input">
                <option>Escolha a cor</option>
                <option>Preto Titânio</option>
                <option>Branco Titânio</option>
                <option>Dourado Titânio</option>
                <option>Azul Titânio</option>
              </select>
              <button className="btn-primary" style={{ width: '100%', fontSize: '1.2rem' }}>
                🍎 QUERO MEU IPHONE 16 AGORA!
              </button>
            </form>
            <p style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '20px', textAlign: 'center' }}>
              Pagamento seguro via PIX, cartão ou boleto | Entrega em até 48h
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 iPhone 16 Pro Max. Todos os direitos reservados.</p>
          <p style={{ marginTop: '10px', fontSize: '0.9rem', opacity: '0.8' }}>
            Produto fictício criado para demonstração
          </p>
        </div>
      </footer>
    </main>
  )
} 