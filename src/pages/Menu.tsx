import React, { useState } from 'react';
import DishCard from '../components/ui/DishCard';
import { bestSellers } from '../data/dishes';

const categories = [
  "Toutes",
  "Pommes au four",
  "Patates savoyardes",
  "Patates gratinées",
  "Grillades",
  "Burgers",
  "Salades",
  "Planches à partager",
  "Menu enfant",
  "Desserts",
  "Boissons"
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Toutes");

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-serif text-5xl font-bold text-primary mb-6">Découvrez notre carte</h1>
        
        <div className="max-w-md mx-auto bg-white p-4 rounded-xl shadow-sm border border-[#E8D1A7] mb-8">
          <label className="block text-sm font-bold text-primary mb-2">Choisissez votre restaurant pour afficher les prix</label>
          <select className="w-full p-2 border border-[#E8D1A7] rounded-lg focus:outline-none focus:border-secondary">
            <option>Sélectionnez un restaurant</option>
            <option>La Patate Gourmande Cannes</option>
            <option>La Patate Gourmande Nice</option>
            <option>La Patate Gourmande Marseille</option>
            <option>La Patate Gourmande Lyon</option>
          </select>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors ${activeCategory === cat ? 'bg-primary text-white' : 'bg-white border border-[#E8D1A7] text-primary hover:bg-[#FFF3DC]'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {bestSellers.map(dish => (
          <DishCard key={dish.id} dish={dish} />
        ))}
        {/* Repeating best sellers to mock a full menu */}
        {bestSellers.map(dish => (
          <DishCard key={dish.id + '-2'} dish={{...dish, id: dish.id + '-2'}} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
