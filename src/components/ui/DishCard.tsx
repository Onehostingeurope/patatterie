import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Dish } from '../../data/dishes';

interface DishCardProps {
  dish: Dish;
}

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  return (
    <motion.div 
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="card-warm flex flex-col h-full overflow-hidden group"
    >
      <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-[1.5rem]">
        <img 
          src={dish.imageUrl} 
          alt={dish.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#7A1F1F]/10 mix-blend-multiply"></div>
      </div>
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif font-bold text-xl text-primary">{dish.name}</h3>
          <span className="font-bold text-secondary text-lg bg-white px-3 py-1 rounded-full shadow-sm border border-[#E8D1A7]">{dish.price}</span>
        </div>
        <p className="text-sm opacity-80 mb-6 flex-grow">{dish.description}</p>
        <Link to="/menu" className="btn-outline w-full py-2">
          Voir le détail
        </Link>
      </div>
    </motion.div>
  );
};

export default DishCard;
