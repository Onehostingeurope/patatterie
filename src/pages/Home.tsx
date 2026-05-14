import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const yBg = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const scaleText = useTransform(heroScroll, [0, 1], [1, 0.9]);

  return (
    <div className="flex flex-col bg-background overflow-hidden">
      
      {/* 1. HERO SECTION (Parallax & Animated Text) */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: yBg }}
          className="absolute inset-0 z-0"
        >
          {/* Mobile Video */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            poster="/p001.png"
            className="w-full h-full object-cover scale-110 block md:hidden"
          >
            <source src="/p003.mp4" type="video/mp4" />
          </video>
          {/* Desktop Video */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            poster="/p001.png"
            className="w-full h-full object-cover scale-110 hidden md:block"
          >
            <source src="/0001.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <motion.div 
          style={{ opacity: opacityText, scale: scaleText }}
          className="relative z-10 container mx-auto px-4 text-center text-cream flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="mb-4 text-secondary tracking-[0.3em] uppercase text-sm font-bold [text-shadow:0_2px_4px_rgba(0,0,0,0.8)]"
          >
            L'Atelier de la Pomme de Terre
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-[0.9] [text-shadow:0_4px_20px_rgba(0,0,0,0.9)]"
          >
            Sublimer <br/> <span className="text-secondary italic font-light">l'essentiel.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="max-w-xl mx-auto text-lg md:text-xl font-semibold text-cream mb-12 [text-shadow:0_2px_10px_rgba(0,0,0,0.9)]"
          >
            Découvrez une expérience gastronomique unique où le plus humble des tubercules devient une œuvre d'art.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            <Link to="/reservation" className="btn-primary text-lg px-12 py-4 rounded-full shadow-warm-lg hover:shadow-xl transition-all">
              Réserver une table
            </Link>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
              <span className="text-xs font-bold tracking-widest uppercase text-cream [text-shadow:0_2px_4px_rgba(0,0,0,0.9)] text-center">Ou en livraison :</span>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a href="https://ubereats.com" target="_blank" rel="noopener noreferrer" className="w-48 sm:w-auto px-6 py-2.5 border border-cream/30 rounded-full hover:bg-cream/10 transition-colors flex items-center justify-center gap-2 text-sm font-bold backdrop-blur-sm">
                  <span className="text-[#06C167]">Uber</span> Eats
                </a>
                <a href="https://deliveroo.fr" target="_blank" rel="noopener noreferrer" className="w-48 sm:w-auto px-6 py-2.5 border border-cream/30 rounded-full hover:bg-cream/10 transition-colors flex items-center justify-center gap-2 text-sm font-bold backdrop-blur-sm">
                  <span className="text-[#00CCBC]">Deliveroo</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/50"
        >
          <span className="text-xs uppercase tracking-widest">Découvrir</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-secondary to-transparent"
          />
        </motion.div>
      </section>

      {/* 2. THE CONCEPT (Split reveal) */}
      <section className="py-32 px-4 relative bg-cream border-t border-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-8 leading-tight">
                La noblesse <br/> <span className="text-secondary">de la terre.</span>
              </h2>
              <div className="space-y-6 text-lg text-primary/80 font-light leading-relaxed">
                <p>
                  Nous avons choisi de mettre en lumière un produit que l'on croit connaître, pour mieux vous surprendre. 
                  Notre chef sélectionne des variétés rares et anciennes auprès de producteurs passionnés.
                </p>
                <p>
                  Cuites à la perfection, fumées au bois de hêtre, montées en espuma ou confites au beurre noisette... 
                  La pomme de terre se dévoile sous des textures et des saveurs inattendues.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-tl-[4rem] rounded-br-[4rem] overflow-hidden shadow-warm-lg">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&q=80&w=1000" 
                  alt="Préparation culinaire" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/10 rounded-full blur-2xl z-[-1]"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE DISHES (Staggered Cards) */}
      <section className="py-32 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-secondary tracking-[0.2em] uppercase text-sm font-bold mb-4 block">La Dégustation</span>
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-primary">Créations Signatures</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "L'Or Noir", desc: "Pomme de terre vitelotte confite, caviar d'Aquitaine, crème crue infusée à la ciboulette.", img: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&q=80&w=800" },
              { title: "Mille-Feuille Terrestre", desc: "Fines tranches d'Agata croustillantes, truffe noire du Périgord, jus de viande corsé.", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800" },
              { title: "Fumée d'Automne", desc: "Ecrasé de Ratte du Touquet, anguille fumée, noisettes torréfiées et beurre noisette.", img: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&q=80&w=800" }
            ].map((dish, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="group relative h-[500px] rounded-[2rem] overflow-hidden cursor-pointer shadow-warm-lg"
              >
                <img src={dish.img} alt={dish.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/90 via-accent/40 to-transparent transition-opacity duration-500 group-hover:from-accent/95"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-10 h-[2px] bg-secondary mb-4 transform origin-left transition-transform duration-500 group-hover:scale-x-150"></div>
                  <h3 className="font-serif text-3xl font-bold text-cream mb-2">{dish.title}</h3>
                  <motion.p 
                    className="text-cream/80 text-sm h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 group-hover:mt-4"
                  >
                    {dish.desc}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-center mt-16"
          >
            <Link to="/menu" className="inline-block border-b-2 border-secondary text-primary font-bold pb-1 hover:text-secondary transition-colors uppercase tracking-widest text-sm">
              Découvrir toute la carte
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. THE VENUE (Parallax Banner) */}
      <section className="relative flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="w-full relative"
        >
          <img src="/p001.png" alt="La Patate Gourmande" className="w-full h-auto block" />
        </motion.div>
      </section>

      {/* 5. CTA RESERVATION */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-20 rounded-[2rem] md:rounded-[3rem] shadow-warm-lg border border-secondary/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">Prenez place</h2>
            <p className="text-primary/70 text-lg mb-10 max-w-lg mx-auto">
              Notre salle intime ne compte que 25 couverts par service. Nous vous conseillons de réserver à l'avance.
            </p>
            <Link to="/reservation" className="btn-primary text-xl px-12 py-4 inline-block mb-10">
              Demander une table
            </Link>

            <div className="pt-8 border-t border-primary/10 flex flex-col items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-primary/50 block mb-4 text-center">Ou savourez nos créations chez vous</span>
              <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
                <a href="https://ubereats.com" target="_blank" rel="noopener noreferrer" className="px-6 py-3 md:py-2 border border-[#06C167]/30 text-[#06C167] rounded-full hover:bg-[#06C167]/10 transition-colors text-sm font-bold flex-1 text-center">
                  Commander sur Uber Eats
                </a>
                <a href="https://deliveroo.fr" target="_blank" rel="noopener noreferrer" className="px-6 py-3 md:py-2 border border-[#00CCBC]/30 text-[#00CCBC] rounded-full hover:bg-[#00CCBC]/10 transition-colors text-sm font-bold flex-1 text-center">
                  Commander sur Deliveroo
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
