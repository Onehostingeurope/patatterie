import React from 'react';

const Recruitment = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="font-serif text-5xl font-bold text-primary mb-6">Travailler chez La Patate Gourmande</h1>
        <p className="text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
          Rejoignez une équipe dynamique dans une ambiance familiale et chaleureuse. 
          Nous recrutons régulièrement de nouveaux talents pour nos restaurants.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="card-warm p-6 text-center">
          <h3 className="font-serif text-2xl font-bold text-primary mb-4">En salle</h3>
          <p className="opacity-80">Serveurs, chefs de rang, responsables de salle. Le sourire et le sens du service sont vos atouts.</p>
        </div>
        <div className="card-warm p-6 text-center">
          <h3 className="font-serif text-2xl font-bold text-primary mb-4">En cuisine</h3>
          <p className="opacity-80">Commis, cuisiniers, chefs. La passion du bon produit et la générosité dans l'assiette.</p>
        </div>
        <div className="card-warm p-6 text-center">
          <h3 className="font-serif text-2xl font-bold text-primary mb-4">Management</h3>
          <p className="opacity-80">Directeurs, adjoints. L'animation d'équipe et la gestion d'un centre de profit vous animent.</p>
        </div>
      </div>

      <div className="bg-cream p-8 md:p-12 rounded-[1.5rem] shadow-warm border border-[#E8D1A7]">
        <h2 className="font-serif text-3xl font-bold text-primary mb-8 text-center">Formulaire de candidature</h2>
        <form className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-primary mb-2">Nom complet</label>
              <input type="text" className="w-full p-3 border border-[#E8D1A7] rounded-xl" required />
            </div>
            <div>
              <label className="block text-sm font-bold text-primary mb-2">Email</label>
              <input type="email" className="w-full p-3 border border-[#E8D1A7] rounded-xl" required />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-primary mb-2">Restaurant souhaité</label>
            <select className="w-full p-3 border border-[#E8D1A7] rounded-xl" required>
              <option>Tous les restaurants</option>
              <option>Cannes</option>
              <option>Nice</option>
              <option>Marseille</option>
              <option>Lyon</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-primary mb-2">Poste recherché</label>
            <select className="w-full p-3 border border-[#E8D1A7] rounded-xl" required>
              <option>Service en salle</option>
              <option>Cuisine</option>
              <option>Management</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-primary mb-2">Votre motivation</label>
            <textarea rows={5} className="w-full p-3 border border-[#E8D1A7] rounded-xl" required></textarea>
          </div>
          <div className="text-center mt-4">
            <button type="submit" className="btn-primary px-12">Envoyer ma candidature</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Recruitment;
