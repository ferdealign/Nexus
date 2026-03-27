import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Search, 
  BookOpen, 
  HeartHandshake, 
  ShieldAlert, 
  Puzzle, 
  Brain, 
  Scale, 
  Baby, 
  GraduationCap,
  MessageCircle,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { cn } from './lib/utils';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfbf9] font-sans text-[#333333] selection:bg-[#b89f7a] selection:text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b border-black/10 bg-[#fcfbf9]/90 backdrop-blur-md">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-serif tracking-widest text-[#1a1a1a] uppercase">NEXUS</span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-[11px] font-medium tracking-[0.15em] text-[#333333] uppercase">
            <a href="#funciones" className="hover:text-[#b89f7a] transition-colors">Funciones</a>
            <a href="#emocional" className="hover:text-[#b89f7a] transition-colors">Emocional</a>
            <a href="#niveles" className="hover:text-[#b89f7a] transition-colors">Niveles</a>
          </div>
          <a href="#contacto" className="inline-flex items-center justify-center border border-[#1a1a1a] px-8 py-3 text-[11px] font-medium uppercase tracking-[0.15em] text-[#333333] transition-all hover:bg-[#1a1a1a] hover:text-white">
            Contactarnos
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#1a1a1a] text-white pt-12 pb-32 lg:pt-16 lg:pb-48">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/50 to-[#1a1a1a]"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mx-auto max-w-4xl"
          >
            <span className="inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-[#b89f7a] mb-8">
              Equipo de Orientación Escolar Externo
            </span>
            <h1 className="text-5xl font-serif font-light tracking-tight sm:text-6xl lg:text-7xl leading-[1.1] mb-10">
              Desarrollo integral &<br/>
              <span className="italic text-[#b89f7a]">calidad educativa.</span>
            </h1>
            <div className="w-12 h-[1px] bg-[#b89f7a] mx-auto mb-10"></div>
            <p className="text-lg leading-relaxed text-white/80 max-w-2xl mx-auto font-light">
              Somos un equipo interdisciplinario (psicólogos, trabajador social, médico y abogado) que brinda apoyo, orientación y espacios de escucha, buscando formar equipo entre el colegio, los estudiantes, las familias y los docentes.
            </p>
            <div className="mt-16 flex items-center justify-center">
              <a href="#funciones" className="group inline-flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-all hover:text-[#b89f7a]">
                Conocer nuestras funciones
                <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Funciones Claves (Grid) */}
      <section id="funciones" className="py-32 bg-[#fcfbf9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-[#b89f7a] mb-4">
                Nuestra Experiencia
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-[#1a1a1a] leading-tight">
                Funciones <span className="italic">Claves</span>
              </h2>
            </div>
            <p className="text-base text-[#333333] font-light max-w-md">
              Funcionamos como una herramienta de colaboración, preventiva y asistencial para abordar dificultades y mejorar el clima escolar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {[
              {
                num: "01",
                title: "Presentación e Información",
                desc: "Somos una de las patas de la mesa donde la comunidad educativa puede apoyarse. Estamos ahí para escuchar y dialogar con familias, docentes y directivos."
              },
              {
                num: "02",
                title: "Detección y Prevención",
                desc: "Identificación temprana de dificultades de aprendizaje o necesidades educativas especiales, procurando el apoyo integrado al estudiante, docente y familia."
              },
              {
                num: "03",
                title: "Acompañamiento a Docentes",
                desc: "Asesoramos sobre estrategias pedagógicas, adaptaciones curriculares y búsqueda de herramientas para el caso particular y la integración grupal."
              },
              {
                num: "04",
                title: "Asesoramiento Familiar",
                desc: "Escuchar, dialogar y orientar a las familias en situaciones complejas. Las dificultades en la crianza no deben ser objeto de vergüenzas, sino de búsqueda de respuestas."
              },
              {
                num: "05",
                title: "Intervención en Convivencia",
                desc: "Abordamos el clima escolar implementando herramientas para acercar las familias a la institución, formando grupos de pertenencia y previniendo el bullying."
              },
              {
                num: "06",
                title: "Inclusión",
                desc: "Apoyamos la integración escolar, especialmente en articulación con educación especial, incluso si el niño no tiene diagnóstico ni CUD."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group flex flex-col border-t border-black/10 pt-8"
              >
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-[11px] font-medium text-[#b89f7a] tracking-widest">{feature.num}</span>
                  <h3 className="text-xl font-serif text-[#1a1a1a]">{feature.title}</h3>
                </div>
                <p className="text-[#333333] leading-relaxed font-light text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Educación Emocional y Mediación */}
      <section id="emocional" className="py-32 bg-[#1a1a1a] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <span className="inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-[#b89f7a] mb-6">
                Área de Intervención
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight leading-tight mb-10">
                Educación Emocional<br/>
                <span className="italic text-[#b89f7a]">& Bienestar</span>
              </h2>
              <p className="text-lg text-white/80 font-light leading-relaxed mb-10 max-w-2xl">
                Buscamos sumar a las prácticas del <strong className="font-medium text-white">"Educar poniendo afecto"</strong> un espacio formal donde situar a las competencias socioemocionales como contenido de trabajo.
              </p>
              <div className="w-12 h-[1px] bg-white/20 mb-10"></div>
              <p className="text-sm text-white/60 font-light mb-8 uppercase tracking-widest">
                Talleres para alumnos, docentes y familias:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {[
                  "Adicciones y Bullying",
                  "Grooming y Maltrato",
                  "Violencia de género",
                  "Trastornos de la alimentación",
                  "Prevención del Suicidio",
                  "Leyes 26.892 y 26.061"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-light text-white/90">
                    <div className="w-1 h-1 bg-[#b89f7a] rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 bg-[#fcfbf9] text-[#333333] p-10 md:p-14"
            >
              <Scale className="h-8 w-8 text-[#b89f7a] mb-8 stroke-[1]" />
              <h3 className="text-3xl font-serif font-light mb-6">Mediación y Resolución</h3>
              <p className="text-sm text-[#333333] font-light leading-relaxed mb-10">
                Nuestro equipo posee una Mediadora en resolución alternativa de conflictos. Contamos con un espacio propio (fuera o dentro de la institución) para la escucha y el diálogo.
              </p>
              <div className="border-l border-[#b89f7a] pl-6">
                <p className="text-lg font-serif italic leading-relaxed text-[#333333]">
                  "Utilizamos la mediación y las reuniones con docentes, autoridades, familias y alumnos para que todo aquel que sienta la inquietud, sea escuchado."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Niveles Educativos */}
      <section id="niveles" className="py-32 bg-[#fcfbf9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-[#b89f7a] mb-4">
              Estructura
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight text-[#1a1a1a] leading-tight mb-6">
              Abordaje por <span className="italic">Niveles</span>
            </h2>
            <div className="w-12 h-[1px] bg-[#b89f7a] mx-auto mb-6"></div>
            <p className="text-base text-[#333333] font-light">
              Es necesario que cada nivel educativo cuente con el apoyo del EOE, adaptando las estrategias a las etapas de desarrollo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Nivel Inicial */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-black/10 p-10 md:p-14 bg-white"
            >
              <h3 className="text-3xl font-serif font-light text-[#1a1a1a] mb-6">Nivel Inicial</h3>
              <p className="text-sm text-[#333333] font-light leading-relaxed mb-10">
                Acompañamos la primera infancia, caracterizada por el desapego familiar y la entrada a un mundo de juegos y socialización.
              </p>
              <ul className="space-y-6">
                {[
                  "Detección temprana en lenguaje y coordinación motriz.",
                  "Asesoramiento a familias para estimular el crecimiento.",
                  "Evaluación para el ingreso a la escolaridad primaria (IIIº sección).",
                  "Talleres para padres sobre problemáticas típicas de la infancia."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm font-light text-[#333333]">
                    <span className="text-[10px] text-[#b89f7a] mt-1">0{i+1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Nivel Secundario */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border border-black/10 p-10 md:p-14 bg-white"
            >
              <h3 className="text-3xl font-serif font-light text-[#1a1a1a] mb-6">Nivel Secundario</h3>
              <p className="text-sm text-[#333333] font-light leading-relaxed mb-10">
                Recibimos derivaciones ante manifestaciones desadaptativas, malestar anímico o problemas de rendimiento y conducta.
              </p>
              <ul className="space-y-6">
                {[
                  "Asesoramiento a docentes sobre técnicas de estudio.",
                  "Entrevistas directas solicitadas por alumnos, padres o preceptores.",
                  "Derivación responsable a especialistas externos (no hacemos terapia en el colegio).",
                  "Taller optativo de Orientación Vocacional para el último año."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm font-light text-[#333333]">
                    <span className="text-[10px] text-[#b89f7a] mt-1">0{i+1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Aclaración Ética */}
          <div className="mt-32 max-w-4xl mx-auto text-center">
            <div className="w-px h-16 bg-[#b89f7a] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-serif font-light italic text-[#333333] leading-relaxed">
              La tarea es preventiva y no terapéutica. No se realiza tratamiento psicopedagógico ni psicoterapéutico dentro de la escuela; frente a dificultades, se deriva a la especialidad correspondiente realizando un seguimiento conjunto.
            </p>
          </div>
        </div>
      </section>

      {/* Footer / CTA */}
      <footer id="contacto" className="bg-[#1a1a1a] text-white py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-[#b89f7a] mb-8">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-light tracking-tight mb-8">
            Formemos equipo por la<br/><span className="italic text-[#b89f7a]">calidad educativa.</span>
          </h2>
          <p className="text-sm text-white/60 font-light max-w-2xl mx-auto mb-16 leading-relaxed">
            Si bien no es necesario que nos encontremos en forma permanente en la institución, estamos a disposición de las familias, docentes y directivos para organizar entrevistas y comenzar a trabajar.
          </p>
          <a href="mailto:contacto@nexus.edu.ar" className="inline-flex items-center justify-center border border-[#b89f7a] px-10 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-[#b89f7a] transition-all hover:bg-[#b89f7a] hover:text-[#1a1a1a]">
            Contactar al Equipo NEXUS
          </a>
          
          <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-white/40">
            <p>© {new Date().getFullYear()} NEXUS Equipo de Orientación Escolar.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
              <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


