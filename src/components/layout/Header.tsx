import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md shadow-warm border-b border-[#E8D1A7]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 z-50 relative group">
          <motion.div 
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.6 }}
            className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-cream font-serif font-bold text-xl shadow-inner"
          >
            P
          </motion.div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl text-primary leading-none group-hover:text-secondary transition-colors">L'Atelier</span>
            <span className="text-xs font-bold text-secondary uppercase tracking-widest leading-none mt-1">de la Pomme de Terre</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-sm uppercase tracking-wide">
          <Link to="/" className="text-primary hover:text-secondary transition-colors relative group">
            L'Expérience
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/menu" className="text-primary hover:text-secondary transition-colors relative group">
            La Carte
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
          </Link>
          <Link to="/contact" className="text-primary hover:text-secondary transition-colors relative group">
            Le Lieu
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
          </Link>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/reservation" className="btn-primary">
              Réserver
            </Link>
          </motion.div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-cream shadow-warm-lg p-6 border-b border-[#E8D1A7] flex flex-col gap-4 text-center font-serif text-2xl font-bold"
            >
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-primary py-2 hover:text-secondary">L'Expérience</Link>
              <Link to="/menu" onClick={() => setIsMobileMenuOpen(false)} className="text-primary py-2 hover:text-secondary">La Carte</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-primary py-2 hover:text-secondary">Le Lieu</Link>
              <Link to="/reservation" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary mt-4 py-4 text-lg">Réserver une table</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
