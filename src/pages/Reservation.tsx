import React, { useState } from 'react';

const Reservation = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-24 text-center max-w-lg">
        <div className="bg-cream rounded-[1.5rem] p-8 shadow-warm border border-[#E8D1A7]">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h2 className="font-serif text-3xl font-bold text-primary mb-4">Réservation confirmée</h2>
          <p className="text-lg opacity-80 mb-8">Votre demande de réservation a bien été envoyée. Vous recevrez une confirmation par email très prochainement.</p>
          <button onClick={() => setSubmitted(false)} className="btn-primary">Nouvelle réservation</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="text-center mb-10">
        <h1 className="font-serif text-5xl font-bold text-primary mb-4">Réserver une table</h1>
        <p className="text-lg opacity-80">Venez partager un moment gourmand en famille ou entre amis.</p>
      </div>

      <div className="bg-white rounded-[1.5rem] p-8 shadow-warm border border-[#E8D1A7]">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-bold text-primary mb-2">Restaurant</label>
            <select className="w-full p-3 border border-[#E8D1A7] rounded-xl focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-gray-50" required>
              <option value="">Sélectionnez un restaurant</option>
              <option>La Patate Gourmande Cannes</option>
              <option>La Patate Gourmande Nice</option>
              <option>La Patate Gourmande Marseille</option>
              <option>La Patate Gourmande Lyon</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-primary mb-2">Date</label>
            <input type="date" className="w-full p-3 border border-[#E8D1A7] rounded-xl focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-gray-50" required />
          </div>

          <div>
            <label className="block text-sm font-bold text-primary mb-2">Heure</label>
            <input type="time" className="w-full p-3 border border-[#E8D1A7] rounded-xl focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-gray-50" required />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-bold text-primary mb-2">Nombre de personnes</label>
            <select className="w-full p-3 border border-[#E8D1A7] rounded-xl focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-gray-50" required>
              {[1,2,3,4,5,6,7,8,9,10, "Plus de 10"].map(num => <option key={num} value={num}>{num} {typeof num === 'number' && num > 1 ? 'personnes' : typeof num === 'number' ? 'personne' : ''}</option>)}
            </select>
          </div>

          <div>
            <label className="block text-sm font-bold text-primary mb-2">Prénom</label>
            <input type="text" className="w-full p-3 border border-[#E8D1A7] rounded-xl focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-gray-50" required />
          </div>

          <div>
            <label className="block text-sm font-bold text-primary mb-2">Nom</label>
            <input type="text" className="w-full p-3 border border-[#E8D1A7] rounded-xl focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-gray-50" required />
          </div>

          <div>
            <label className="block text-sm font-bold text-primary mb-2">Téléphone</label>
            <input type="tel" className="w-full p-3 border border-[#E8D1A7] rounded-xl focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-gray-50" required />
          </div>

          <div>
            <label className="block text-sm font-bold text-primary mb-2">Email</label>
            <input type="email" className="w-full p-3 border border-[#E8D1A7] rounded-xl focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-gray-50" required />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-bold text-primary mb-2">Message particulier (optionnel)</label>
            <textarea rows={3} className="w-full p-3 border border-[#E8D1A7] rounded-xl focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary bg-gray-50" placeholder="Anniversaire, chaise haute, allergies..."></textarea>
          </div>

          <div className="col-span-1 md:col-span-2 mt-4 text-center">
            <button type="submit" className="btn-primary w-full md:w-auto px-12">Confirmer ma réservation</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
