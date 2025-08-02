import Image from 'next/image'
import { FaStar, FaWhatsapp, FaMapMarkerAlt, FaInstagram, FaGoogle } from 'react-icons/fa'
import { MdLocalPhone, MdEmail } from 'react-icons/md'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                🦷 Sorria com Confiança
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                Cuide do seu sorriso com quem entende de estética e saúde.
              </p>
              <p className="text-lg text-gray-500">
                Atendimento humano, tecnologia de ponta e resultados que transformam vidas.
              </p>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">
                  Mais de 1.200 pacientes atendidos com excelência
                </span>
              </div>
              
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Agendar Consulta
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-4xl">👨‍⚕️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Dr. Lucas Almeida</h3>
                  <p className="text-gray-600">Especialista em Odontologia Estética</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Profissional */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
            Conheça o Dr. Lucas Almeida
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Apaixonado por transformar sorrisos, o Dr. Lucas atua há mais de 10 anos com foco em odontologia estética e funcional. Especialista em Implantes, Lentes de Contato Dental e Ortodontia de última geração, oferece uma experiência segura e personalizada para cada paciente.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl mb-4">🎓</div>
              <h3 className="font-bold text-gray-800 mb-2">Especializações</h3>
              <p className="text-gray-600 text-sm">CRO-SP, Implantes, Estética</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl mb-4">⭐</div>
              <h3 className="font-bold text-gray-800 mb-2">Experiência</h3>
              <p className="text-gray-600 text-sm">10+ anos de atuação</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="font-bold text-gray-800 mb-2">Reconhecimento</h3>
              <p className="text-gray-600 text-sm">Congressos e Certificações</p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
            Tratamentos Premium, Resultados Reais
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🦷</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Implantes Dentários</h3>
              <p className="text-gray-600">
                Recupere sua autoestima com implantes 100% seguros e naturais.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Lentes de Contato Dental</h3>
              <p className="text-gray-600">
                Transforme seu sorriso com lentes ultrafinas e naturais.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Clareamento a Laser</h3>
              <p className="text-gray-600">
                Resultados rápidos e duradouros com tecnologia avançada.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🦿</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Aparelho Invisível</h3>
              <p className="text-gray-600">
                Alinhe seus dentes de forma discreta e confortável.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Check-up e Limpeza</h3>
              <p className="text-gray-600">
                Mantenha sua saúde bucal em dia com prevenção.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Atendimento de Urgência</h3>
              <p className="text-gray-600">
                Suporte 24h para emergências odontológicas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-8">
            O que dizem nossos pacientes
          </h2>
          
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-2xl" />
              ))}
              <span className="text-xl font-bold text-gray-800 ml-2">4.9</span>
              <span className="text-gray-600">no Google – Avaliações verificadas</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  M
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Maria Silva</h4>
                  <p className="text-gray-600 text-sm">São Paulo, SP</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Dr. Lucas transformou meu sorriso! Atendimento excepcional e resultados incríveis. Recomendo para todos!"
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  J
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">João Santos</h4>
                  <p className="text-gray-600 text-sm">São Paulo, SP</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Profissionalismo e tecnologia de ponta. Meus implantes ficaram perfeitos!"
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  A
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Ana Costa</h4>
                  <p className="text-gray-600 text-sm">São Paulo, SP</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Clínica limpa, atendimento humanizado. Dr. Lucas é simplesmente o melhor!"
              </p>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-lg text-gray-600">
              Mais de 3.500 sorrisos atendidos com empatia e excelência
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Agende agora sua avaliação gratuita
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Estamos com poucas vagas disponíveis para este mês. Garanta sua consulta e receba um plano de tratamento totalmente personalizado.
          </p>
          
          <div className="bg-white p-8 rounded-xl max-w-md mx-auto">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Seu nome"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="WhatsApp"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Melhor horário</option>
                <option>Manhã</option>
                <option>Tarde</option>
                <option>Noite</option>
              </select>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Quero agendar agora
              </button>
            </form>
            <p className="text-sm text-gray-600 mt-4">
              Retornaremos em até 15 minutos via WhatsApp
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Dr. Lucas Almeida</h3>
              <p className="text-gray-300 mb-6">
                Excelência em odontologia com empatia, inovação e resultados.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-blue-400" />
                  <span className="text-gray-300">Rua das Flores, 123 - São Paulo, SP</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaWhatsapp className="text-green-400" />
                  <span className="text-gray-300">(11) 99999-9999</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MdEmail className="text-blue-400" />
                  <span className="text-gray-300">contato@drlucas.com.br</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-4">Horário de Atendimento</h4>
              <div className="space-y-2 text-gray-300">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p>Domingo: Fechado</p>
              </div>
              
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-2xl text-pink-400 hover:text-pink-300 transition-colors">
                  <FaInstagram />
                </a>
                <a href="#" className="text-2xl text-red-400 hover:text-red-300 transition-colors">
                  <FaGoogle />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dr. Lucas Almeida. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/5511999999999"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        >
          <FaWhatsapp className="text-2xl" />
        </a>
      </div>
    </main>
  )
} 