import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { MapPin, Phone, Clock, Star, Users, Car, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const RestaurantDetail = () => {
  const { slug } = useParams();

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-end pb-12 px-4 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200" alt="Restaurant interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
        </motion.div>
        <div className="relative z-10 container mx-auto text-white">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-6xl font-bold mb-4 capitalize"
          >
            La Patate Gourmande {slug}
          </motion.h1>
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-6 text-lg font-semibold opacity-90"
          >
            <div className="flex items-center gap-2"><MapPin size={20} /> 12 Rue de la Patate, Ville</div>
            <div className="flex items-center gap-2"><Phone size={20} /> 04 93 12 34 56</div>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl font-bold text-primary mb-6">Bienvenue dans votre restaurant</h2>
            <p className="text-lg opacity-80 mb-8 leading-relaxed">
              Toute l'équipe de La Patate Gourmande {slug} est heureuse de vous accueillir dans un cadre chaleureux et convivial. 
              Venez déguster nos célèbres pommes de terre au four, nos spécialités savoyardes et nos viandes grillées.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="card-warm p-4 text-center flex flex-col items-center justify-center gap-2">
                <Car className="text-secondary" size={28} />
                <span className="font-bold text-sm">Parking</span>
              </div>
              <div className="card-warm p-4 text-center flex flex-col items-center justify-center gap-2">
                <Users className="text-secondary" size={28} />
                <span className="font-bold text-sm">Espace enfants</span>
              </div>
              <div className="card-warm p-4 text-center flex flex-col items-center justify-center gap-2">
                <Coffee className="text-secondary" size={28} />
                <span className="font-bold text-sm">Terrasse</span>
              </div>
              <div className="card-warm p-4 text-center flex flex-col items-center justify-center gap-2">
                <Star className="text-secondary" size={28} />
                <span className="font-bold text-sm">Accessible PMR</span>
              </div>
            </div>

            <h3 className="font-serif text-2xl font-bold text-primary mb-6">Avis récents</h3>
            <div className="space-y-4">
              {[1, 2].map((i) => (
                <div key={i} className="card-warm p-6">
                  <div className="flex gap-1 text-secondary mb-2">
                    <Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" />
                  </div>
                  <p className="opacity-80 italic">"Très bon accueil, les plats sont copieux et le fromage est excellent. Je recommande !"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card-warm p-8 sticky top-24">
              <h3 className="font-serif text-2xl font-bold text-primary mb-6">Informations pratiques</h3>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-bold text-primary mb-2 flex items-center gap-2"><Clock size={18} /> Horaires d'ouverture</h4>
                  <ul className="text-sm opacity-80 space-y-1">
                    <li className="flex justify-between"><span>Lundi - Jeudi</span><span>11:30 - 22:30</span></li>
                    <li className="flex justify-between font-bold text-primary"><span>Vendredi - Samedi</span><span>11:30 - 23:30</span></li>
                    <li className="flex justify-between"><span>Dimanche</span><span>11:30 - 22:30</span></li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <Link to="/reservation" className="btn-primary w-full py-4 text-lg">Réserver une table</Link>
                <Link to="/menu" className="btn-outline w-full">Voir la carte</Link>
                <button className="text-primary font-bold hover:text-secondary underline underline-offset-4 mt-2">
                  Calculer l'itinéraire
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetail;
