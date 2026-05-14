import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Search, Phone, Clock, Star } from 'lucide-react';

const mockRestaurants = [
  { id: 'cannes', name: 'La Patate Gourmande Cannes', address: '12 Rue d\'Antibes, 06400 Cannes', hours: '11:30 - 23:00', phone: '04 93 12 34 56' },
  { id: 'nice', name: 'La Patate Gourmande Nice', address: '45 Promenade des Anglais, 06000 Nice', hours: '11:30 - 23:00', phone: '04 93 98 76 54' },
  { id: 'marseille', name: 'La Patate Gourmande Marseille', address: 'Vieux Port, 13000 Marseille', hours: '11:30 - 23:30', phone: '04 91 23 45 67' },
  { id: 'lyon', name: 'La Patate Gourmande Lyon', address: 'Place Bellecour, 69002 Lyon', hours: '11:30 - 22:30', phone: '04 78 12 34 56' }
];

const Restaurants = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="font-serif text-5xl font-bold text-primary mb-4">Trouvez votre pataterie</h1>
        <p className="text-lg opacity-80 max-w-2xl mx-auto">Découvrez nos restaurants proches de chez vous et réservez votre table.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[800px]">
        {/* Left column: List and filters */}
        <div className="lg:col-span-1 flex flex-col gap-6 overflow-hidden">
          <div className="bg-white p-4 rounded-[1.5rem] shadow-warm border border-[#E8D1A7] flex-shrink-0">
            <div className="flex bg-gray-50 rounded-xl p-2 border border-gray-200 mb-4">
              <div className="pl-3 flex items-center text-primary/50"><Search size={20} /></div>
              <input type="text" placeholder="Ville, code postal ou restaurant" className="flex-grow px-3 py-2 bg-transparent focus:outline-none text-sm" />
            </div>
            
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              <span className="px-3 py-1 bg-cream rounded-full border border-primary/20 text-primary cursor-pointer hover:bg-primary hover:text-white transition-colors">Ouvert maintenant</span>
              <span className="px-3 py-1 bg-cream rounded-full border border-primary/20 text-primary cursor-pointer hover:bg-primary hover:text-white transition-colors">Terrasse</span>
              <span className="px-3 py-1 bg-cream rounded-full border border-primary/20 text-primary cursor-pointer hover:bg-primary hover:text-white transition-colors">Parking</span>
              <span className="px-3 py-1 bg-cream rounded-full border border-primary/20 text-primary cursor-pointer hover:bg-primary hover:text-white transition-colors">Espace enfant</span>
              <span className="px-3 py-1 bg-cream rounded-full border border-primary/20 text-primary cursor-pointer hover:bg-primary hover:text-white transition-colors">Accessible PMR</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 overflow-y-auto pr-2 pb-4 flex-grow">
            {mockRestaurants.map(restaurant => (
              <div key={restaurant.id} className="bg-cream p-5 rounded-[1.5rem] shadow-warm border border-[#E8D1A7] hover:border-secondary transition-colors group cursor-pointer">
                <h3 className="font-serif font-bold text-xl text-primary mb-2 group-hover:text-secondary transition-colors">{restaurant.name}</h3>
                <div className="flex items-start gap-2 text-sm opacity-80 mb-2">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  <span>{restaurant.address}</span>
                </div>
                <div className="flex items-start gap-2 text-sm opacity-80 mb-2">
                  <Clock size={16} className="mt-0.5 shrink-0" />
                  <span>{restaurant.hours}</span>
                </div>
                <div className="flex items-start gap-2 text-sm opacity-80 mb-4">
                  <Phone size={16} className="mt-0.5 shrink-0" />
                  <span>{restaurant.phone}</span>
                </div>
                <div className="flex gap-2 mt-4">
                  <Link to={`/restaurants/${restaurant.id}`} className="btn-outline flex-1 py-2 text-sm">Voir le restaurant</Link>
                  <Link to="/reservation" className="btn-primary flex-1 py-2 text-sm">Réserver</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: Map placeholder */}
        <div className="lg:col-span-2 bg-gray-200 rounded-[1.5rem] shadow-inner overflow-hidden relative min-h-[400px]">
          <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" alt="Map placeholder" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl text-center border border-primary/10">
              <MapPin size={48} className="text-secondary mx-auto mb-4 drop-shadow-md" />
              <h3 className="font-serif font-bold text-2xl text-primary mb-2">Carte interactive</h3>
              <p className="opacity-80">Sélectionnez un restaurant dans la liste</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
