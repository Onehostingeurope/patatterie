export interface Dish {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  category: string;
  isNew?: boolean;
}

export const bestSellers: Dish[] = [
  {
    id: 'patate-raclette',
    name: 'Patate Raclette',
    description: 'Pomme de terre au four, raclette fondue, lardons grillés, oignons confits et crème ciboulette.',
    price: '14,90 €',
    imageUrl: 'https://images.unsplash.com/photo-1627993077798-251d7eef83b5?auto=format&fit=crop&q=80&w=800',
    category: 'Spécialités',
  },
  {
    id: 'patate-savoyarde',
    name: 'Patate Savoyarde',
    description: 'Pomme de terre généreuse, reblochon fondu, jambon cru, crème fraîche et salade verte.',
    price: '15,90 €',
    imageUrl: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&q=80&w=800',
    category: 'Spécialités',
  },
  {
    id: 'patate-cheddar-bacon',
    name: 'Patate Cheddar Bacon',
    description: 'Pomme de terre au four, cheddar fondant, bacon croustillant, sauce maison et herbes fraîches.',
    price: '13,90 €',
    imageUrl: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&q=80&w=800',
    category: 'Classiques',
  },
  {
    id: 'patate-poulet-creme',
    name: 'Patate Poulet Crème',
    description: 'Pomme de terre moelleuse, poulet grillé, champignons, crème légère et persil.',
    price: '14,50 €',
    imageUrl: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800',
    category: 'Volailles',
  },
  {
    id: 'patate-vegetarienne',
    name: 'Patate Végétarienne',
    description: 'Pomme de terre au four, légumes grillés, fromage frais, salade et sauce aux herbes.',
    price: '12,90 €',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    category: 'Végétarien',
  },
  {
    id: 'planche-gourmande',
    name: 'Planche Gourmande',
    description: 'Charcuterie, fromages, pommes grenailles, sauces maison et pain grillé.',
    price: '18,90 €',
    imageUrl: 'https://images.unsplash.com/photo-1533756972966-2eb2fc95bf0a?auto=format&fit=crop&q=80&w=800',
    category: 'Planches',
  }
];
