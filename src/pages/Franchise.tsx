import React from 'react';
import { Link } from 'react-router-dom';

const Franchise = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl font-bold text-primary mb-6">Ouvrir une pataterie</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
          Rejoignez un concept de restauration familiale, généreuse et accessible, centré sur un produit populaire : la pomme de terre.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="font-serif text-3xl font-bold text-primary mb-6">Le concept</h2>
          <p className="opacity-80 mb-4 leading-relaxed">
            La Patate Gourmande, c'est l'assurance d'un restaurant chaleureux où l'on se sent bien. Nous misons sur des produits authentiques et des recettes conviviales.
          </p>
          <ul className="space-y-2 opacity-80 list-disc list-inside">
            <li>Un produit central à forte marge</li>
            <li>Une atmosphère rustique et chaleureuse</li>
            <li>Une carte adaptée à toute la famille</li>
            <li>Un accompagnement sur-mesure</li>
          </ul>
        </div>
        <div className="card-warm p-8">
          <h3 className="font-serif text-2xl font-bold text-primary mb-4">Profil recherché</h3>
          <p className="opacity-80 mb-4">
            Nous recherchons des entrepreneurs passionnés par la restauration, avec de solides compétences managériales et commerciales.
          </p>
          <div className="font-bold text-primary">
            Apport personnel minimum : <span className="text-secondary text-xl">80 000 €</span>
          </div>
        </div>
      </div>

      <div className="bg-cream p-8 md:p-12 rounded-[1.5rem] shadow-warm border border-[#E8D1A7]">
        <h2 className="font-serif text-3xl font-bold text-primary mb-8 text-center">Demande d'information franchise</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-primary mb-2">Nom / Prénom</label>
            <input type="text" className="w-full p-3 border border-[#E8D1A7] rounded-xl" required />
          </div>
          <div>
            <label className="block text-sm font-bold text-primary mb-2">Téléphone</label>
            <input type="tel" className="w-full p-3 border border-[#E8D1A7] rounded-xl" required />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-bold text-primary mb-2">Email</label>
            <input type="email" className="w-full p-3 border border-[#E8D1A7] rounded-xl" required />
          </div>
          <div>
            <label className="block text-sm font-bold text-primary mb-2">Ville d'implantation souhaitée</label>
            <input type="text" className="w-full p-3 border border-[#E8D1A7] rounded-xl" required />
          </div>
          <div>
            <label className="block text-sm font-bold text-primary mb-2">Budget d'investissement</label>
            <select className="w-full p-3 border border-[#E8D1A7] rounded-xl" required>
              <option>Moins de 100k€</option>
              <option>100k€ - 200k€</option>
              <option>Plus de 200k€</option>
            </select>
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-bold text-primary mb-2">Votre message / Projet</label>
            <textarea rows={4} className="w-full p-3 border border-[#E8D1A7] rounded-xl" required></textarea>
          </div>
          <div className="col-span-1 md:col-span-2 text-center mt-4">
            <button type="submit" className="btn-primary px-12">Envoyer ma demande</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Franchise;
