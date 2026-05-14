import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl font-bold text-primary mb-6">Contactez-nous</h1>
        <p className="text-xl opacity-80 max-w-2xl mx-auto">
          Une question, une remarque ou une envie de rejoindre l'aventure ? Écrivez-nous !
        </p>
      </div>

      <div className="bg-cream p-8 md:p-12 rounded-[1.5rem] shadow-warm border border-[#E8D1A7]">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-primary mb-2">Nom</label>
            <input type="text" className="w-full p-3 border border-[#E8D1A7] rounded-xl" required />
          </div>
          <div>
            <label className="block text-sm font-bold text-primary mb-2">Email</label>
            <input type="email" className="w-full p-3 border border-[#E8D1A7] rounded-xl" required />
          </div>
          <div>
            <label className="block text-sm font-bold text-primary mb-2">Téléphone</label>
            <input type="tel" className="w-full p-3 border border-[#E8D1A7] rounded-xl" required />
          </div>
          <div>
            <label className="block text-sm font-bold text-primary mb-2">Sujet</label>
            <select className="w-full p-3 border border-[#E8D1A7] rounded-xl" required>
              <option>Information générale</option>
              <option>Réservation de groupe</option>
              <option>Réclamation</option>
              <option>Autre</option>
            </select>
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-bold text-primary mb-2">Restaurant concerné (optionnel)</label>
            <select className="w-full p-3 border border-[#E8D1A7] rounded-xl">
              <option value="">Aucun restaurant en particulier</option>
              <option>Cannes</option>
              <option>Nice</option>
              <option>Marseille</option>
              <option>Lyon</option>
            </select>
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-bold text-primary mb-2">Message</label>
            <textarea rows={5} className="w-full p-3 border border-[#E8D1A7] rounded-xl" required></textarea>
          </div>
          <div className="col-span-1 md:col-span-2 text-center mt-4">
            <button type="submit" className="btn-primary px-12">Envoyer le message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
