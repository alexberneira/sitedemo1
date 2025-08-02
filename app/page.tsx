import Image from 'next/image'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>🚀 SmartFone Pro</h1>
          <p>O smartphone mais avançado do mercado com tecnologia de ponta</p>
          <button className="btn-primary">
            Comprar Agora - 50% OFF
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
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                color: 'white',
                margin: '0 auto'
              }}>
                📱
              </div>
            </div>
            
            <div className="product-info">
              <h2>SmartFone Pro - Revolução Tecnológica</h2>
              <p>
                Descubra o smartphone que está mudando a forma como você se conecta com o mundo. 
                Com câmera de 108MP, bateria de 5000mAh e processador de última geração, 
                o SmartFone Pro oferece uma experiência incomparável.
              </p>
              
              <div className="price">
                <span className="original-price">R$ 2.999</span>
                R$ 1.499
              </div>
              
              <button className="btn-primary" style={{ fontSize: '1.2rem', padding: '18px 40px' }}>
                🛒 Comprar Agora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Por que escolher o SmartFone Pro?</h2>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📸</div>
              <h3>Câmera Profissional</h3>
              <p>
                Câmera principal de 108MP com estabilização óptica, 
                capturando momentos com qualidade profissional.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Performance Extrema</h3>
              <p>
                Processador Snapdragon 8 Gen 2 com 12GB de RAM, 
                garantindo velocidade e fluidez em todas as tarefas.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔋</div>
              <h3>Bateria de Longa Duração</h3>
              <p>
                5000mAh com carregamento rápido de 100W, 
                você passa o dia todo sem se preocupar com a bateria.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🖥️</div>
              <h3>Tela Imersiva</h3>
              <p>
                Display AMOLED de 6.7" com 120Hz de taxa de atualização, 
                proporcionando uma experiência visual incrível.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Segurança Avançada</h3>
              <p>
                Sensor de impressão digital ultrarrápido e reconhecimento facial 3D, 
                mantendo seus dados sempre seguros.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🌐</div>
              <h3>5G Ultra Rápido</h3>
              <p>
                Conectividade 5G de última geração, 
                navegue e baixe arquivos com velocidade impressionante.
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
                <div className="testimonial-avatar">M</div>
                <div className="testimonial-info">
                  <h4>Maria Silva</h4>
                  <p>São Paulo, SP</p>
                </div>
              </div>
              <div className="testimonial-text">
                "Incrível! A câmera é espetacular e a bateria dura o dia todo. 
                Valeu cada centavo investido!"
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <div className="testimonial-header">
                <div className="testimonial-avatar">J</div>
                <div className="testimonial-info">
                  <h4>João Santos</h4>
                  <p>Rio de Janeiro, RJ</p>
                </div>
              </div>
              <div className="testimonial-text">
                "Performance excepcional! Jogos rodam perfeitamente e 
                a tela é simplesmente incrível."
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <div className="testimonial-header">
                <div className="testimonial-avatar">A</div>
                <div className="testimonial-info">
                  <h4>Ana Costa</h4>
                  <p>Belo Horizonte, MG</p>
                </div>
              </div>
              <div className="testimonial-text">
                "Melhor smartphone que já tive! Design elegante, 
                câmera profissional e velocidade impressionante."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="guarantee-section">
        <div className="container">
          <div className="guarantee-icon">🛡️</div>
          <h3>Garantia de 2 Anos</h3>
          <p>
            Compre com total segurança! Oferecemos garantia de 2 anos em todo o produto, 
            incluindo peças e mão de obra. Se não ficar satisfeito, devolvemos seu dinheiro em até 30 dias.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Oferta Limitada - Não Perca!</h2>
          <p>
            Apenas 50 unidades disponíveis com 50% de desconto. 
            Garanta o seu SmartFone Pro antes que acabe!
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
              <button className="btn-primary" style={{ width: '100%', fontSize: '1.2rem' }}>
                🚀 QUERO MEU SMARTFONE PRO AGORA!
              </button>
            </form>
            <p style={{ fontSize: '0.9rem', color: '#6b7280', marginTop: '20px', textAlign: 'center' }}>
              Pagamento seguro via PIX, cartão ou boleto
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 SmartFone Pro. Todos os direitos reservados.</p>
          <p style={{ marginTop: '10px', fontSize: '0.9rem', opacity: '0.8' }}>
            Produto fictício criado para demonstração
          </p>
        </div>
      </footer>
    </main>
  )
} 