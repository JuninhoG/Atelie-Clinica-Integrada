/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  CheckCircle2, 
  Stethoscope, 
  Smile, 
  FlaskConical, 
  Apple, 
  Brain,
  MessageCircle,
  ChevronRight,
  Star,
  Plus,
  Minus,
  Instagram,
  MapPin,
  Phone,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const WHATSAPP_URL = "https://wa.me/595986169481";
const INSTAGRAM_URL = "https://www.instagram.com/atelieclinicaintegrada/";

const services = [
  {
    icon: <Smile className="w-6 h-6" />,
    title: "Odontología",
    description: "Cuidado integral de tu salud bucal con tecnología de punta."
  },
  {
    icon: <FlaskConical className="w-6 h-6" />,
    title: "Análisis clínicos",
    description: "Resultados confiables y rápidos para tu tranquilidad."
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "Medicina general",
    description: "Atención profesional personalizada para toda la familia."
  },
  {
    icon: <Apple className="w-6 h-6" />,
    title: "Nutrición",
    description: "Planes adaptados a tu estilo de vida y objetivos."
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Psicología",
    description: "Bienestar emocional y mental en un espacio seguro."
  }
];

const testimonials = [
  {
    text: "“Excelente atención y profesionales muy atentos. Todo en un mismo lugar, súper práctico.”",
    author: "Ana Paula Ferreira"
  },
  {
    text: "“Me sentí acompañada en todo el proceso. La calidez humana es lo que más destaco.”",
    author: "Lucía Rodríguez"
  },
  {
    text: "“Instalaciones modernas y un equipo de primer nivel. Muy recomendable.”",
    author: "Carlos Méndez"
  }
];

const faqs = [
  {
    question: "¿Cómo puedo agendar una cita?",
    answer: "Puedes agendar directamente a través de nuestro botón de WhatsApp o llamando a nuestro número de atención al cliente."
  },
  {
    question: "¿Aceptan seguros médicos?",
    answer: "Sí, trabajamos con las principales aseguradoras. Por favor, consúltanos por WhatsApp para verificar tu cobertura específica."
  },
  {
    question: "¿Dónde están ubicados?",
    answer: "Estamos en una zona céntrica de fácil acceso. Puedes ver el mapa detallado al final de esta página."
  }
];

const tags = [
  "Atención Multidisciplinaria",
  "Profesionales Certificados",
  "Equipamiento Moderno",
  "Enfoque Integral",
  "Atención Humana"
];

interface FAQItemProps {
  key?: any;
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-olive/10 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left group"
      >
        <span className="text-lg font-serif font-medium text-olive-dark group-hover:text-olive transition-colors">
          {question}
        </span>
        {isOpen ? <Minus className="w-5 h-5 text-olive" /> : <Plus className="w-5 h-5 text-olive" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-olive-light leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on scroll or resize
  useEffect(() => {
    const handleClose = () => setIsMenuOpen(false);
    window.addEventListener('scroll', handleClose);
    window.addEventListener('resize', handleClose);
    return () => {
      window.removeEventListener('scroll', handleClose);
      window.removeEventListener('resize', handleClose);
    };
  }, []);

  return (
    <div className="min-h-screen bg-cream selection:bg-olive selection:text-cream overflow-x-hidden">
      {/* Floating WhatsApp */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-olive text-cream p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>

      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-40 bg-cream/90 backdrop-blur-md border-b border-olive/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="font-serif text-xl font-semibold text-olive">Ateliê Clínica Integrada</span>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-olive/70">
            <a href="#servicios" className="hover:text-olive transition-colors">Servicios</a>
            <a href="#testimonios" className="hover:text-olive transition-colors">Testimonios</a>
            <a href="#contacto" className="hover:text-olive transition-colors">Contacto</a>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href={WHATSAPP_URL} 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block text-sm font-semibold bg-olive text-cream px-5 py-2.5 rounded-full hover:bg-olive-dark transition-colors"
            >
              Agendar
            </a>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-olive"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 w-full bg-cream border-b border-olive/10 md:hidden shadow-xl"
            >
              <nav className="flex flex-col p-6 gap-4 text-center font-serif text-lg text-olive">
                <a href="#servicios" onClick={() => setIsMenuOpen(false)} className="py-2 hover:bg-olive/5 rounded-xl transition-colors">Servicios</a>
                <a href="#testimonios" onClick={() => setIsMenuOpen(false)} className="py-2 hover:bg-olive/5 rounded-xl transition-colors">Testimonios</a>
                <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="py-2 hover:bg-olive/5 rounded-xl transition-colors">Contacto</a>
                <a 
                  href={WHATSAPP_URL} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 bg-olive text-cream py-4 rounded-full font-sans text-sm font-semibold"
                >
                  Agendar por WhatsApp
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-center px-6 md:px-20 pt-32 pb-20 gap-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-20 right-20 w-64 md:96 h-64 md:h-96 border border-olive rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-48 md:w-64 h-48 md:h-64 border border-olive rounded-full"></div>
        </div>

        <motion.div 
          className="flex-1 z-10 text-center lg:text-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center lg:justify-start gap-2 mb-6 flex-wrap">
            <span className="pill-tag">Salud</span>
            <span className="pill-tag">Estética</span>
            <span className="pill-tag">Bienestar</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif font-semibold text-olive leading-[1.1] mb-8">
            Todo tu bienestar <br />
            <span className="italic font-normal text-olive-light">en un solo lugar.</span>
          </h1>
          <p className="text-base md:text-xl text-olive-light mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Atención integral en salud, estética y diagnóstico con el profesionalismo y la calidez que mereces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href={WHATSAPP_URL} 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar Consulta
            </a>
            <a href="#servicios" className="btn-secondary w-full sm:w-auto">
              Ver Servicios
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 relative z-10 w-full max-w-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative aspect-video w-full">
            <div className="absolute inset-0 bg-olive/10 rounded-[3rem] md:rounded-[4rem] -rotate-2 translate-x-4 translate-y-4"></div>
            <img 
              src="https://lh3.googleusercontent.com/d/1pgWPHoP49OU_uZX22wa7a3X7jWSkYEHC" 
              alt="Recepción Ateliê Clínica Integrada" 
              className="relative z-10 w-full h-full object-cover rounded-[3rem] md:rounded-[4rem] shadow-2xl border-4 md:border-8 border-white"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </section>

      {/* Visual Identity / Essence Section */}
      <section className="py-16 md:py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-serif mb-6 md:mb-8 text-olive">Nuestra Esencia</h2>
              <p className="text-base md:text-lg text-olive-light leading-relaxed mb-8">
                En Ateliê Clínica Integrada, creemos que la salud no es solo la ausencia de enfermedad, sino un estado de equilibrio completo. 
                Reunimos especialistas certificados para brindarte una atención que integra medicina, estética y diagnóstico en un solo espacio.
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {tags.map((tag, i) => (
                  <span key={i} className="pill-tag">{tag}</span>
                ))}
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-3 md:space-y-4">
                <div className="h-48 md:h-64 bg-olive rounded-2xl md:rounded-3xl"></div>
                <div className="h-24 md:h-32 bg-sage rounded-2xl md:rounded-3xl"></div>
              </div>
              <div className="space-y-3 md:space-y-4 pt-8 md:pt-12">
                <div className="h-24 md:h-32 bg-earth rounded-2xl md:rounded-3xl"></div>
                <div className="h-48 md:h-64 bg-olive-light rounded-2xl md:rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 px-6 bg-cream scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-olive mb-4">Servicios Especializados</h2>
            <p className="text-olive-light">Cuidado integral para cada etapa de tu vida.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-olive/5 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-14 h-14 bg-cream rounded-2xl flex items-center justify-center text-olive mb-8 group-hover:bg-olive group-hover:text-cream transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif mb-4 text-olive-dark">{service.title}</h3>
                <p className="text-olive-light leading-relaxed">{service.description}</p>
                <a 
                  href={WHATSAPP_URL} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center text-olive font-medium group-hover:translate-x-2 transition-transform"
                >
                  Consultar <ChevronRight className="w-4 h-4 ml-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-24 px-6 bg-white overflow-hidden scroll-mt-20">
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute top-0 right-0 text-[10rem] md:text-[20rem] font-serif text-olive/5 leading-none select-none pointer-events-none">“</div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-olive mb-4">Testimonios</h2>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-olive text-olive" />)}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div 
                key={i}
                className="p-10 rounded-[3rem] bg-cream border border-olive/5"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <p className="text-lg text-olive italic mb-8 leading-relaxed">{t.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-olive/10 rounded-full"></div>
                  <span className="font-medium text-olive-dark">{t.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-6 bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif text-olive mb-10 md:mb-12 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-1">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contacto" className="py-24 px-6 bg-olive-dark text-cream text-center relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000" 
            alt="Clinic details" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <motion.div 
          className="max-w-3xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-6xl font-serif mb-8 leading-tight">
            ¿Vamos a cuidar de tu <br />
            <span className="italic">bienestar hoy?</span>
          </h2>
          <p className="text-base md:text-lg text-cream/70 mb-12 max-w-lg mx-auto">
            Estamos listos para brindarte la mejor atención. Haz clic abajo para hablar con nosotros por WhatsApp.
          </p>
          <a 
            href={WHATSAPP_URL} 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-cream text-olive hover:bg-white inline-flex w-full sm:w-auto"
          >
            <MessageCircle className="w-6 h-6" />
            Agendar por WhatsApp
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-cream/60 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="sm:col-span-2">
              <h3 className="text-2xl font-serif text-cream mb-6">Ateliê Clínica Integrada</h3>
              <p className="max-w-xs leading-relaxed">
                Tu bienestar comienza con una decisión. Atención integral en salud, estética y diagnóstico.
              </p>
            </div>
            <div>
              <h4 className="text-cream font-medium mb-6 uppercase text-xs tracking-widest">Contacto</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3"><Phone className="w-4 h-4" /> +595 986 169481</li>
                <li className="flex items-center gap-3"><MapPin className="w-4 h-4" /> Av. Principal, 1234</li>
                <li className="flex items-center gap-3"><Instagram className="w-4 h-4" /> @atelieclinicaintegrada</li>
              </ul>
            </div>
            <div>
              <h4 className="text-cream font-medium mb-6 uppercase text-xs tracking-widest">Horarios</h4>
              <ul className="space-y-4 text-sm">
                <li>Lun - Vie: 08:00 - 19:00</li>
                <li>Sábados: 08:00 - 13:00</li>
                <li>Domingos: Cerrado</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
            <p>© {new Date().getFullYear()} Ateliê Clínica Integrada. Todos los derechos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-cream transition-colors">Privacidad</a>
              <a href="#" className="hover:text-cream transition-colors">Términos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
