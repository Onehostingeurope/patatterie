
import { Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-accent text-cream pt-20 pb-10 border-t-4 border-secondary relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-cream font-serif font-bold text-2xl shadow-inner border border-secondary/30">
                P
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl text-cream leading-none">L'Atelier</span>
                <span className="text-sm font-bold text-secondary uppercase tracking-widest leading-none mt-1">Pomme de Terre</span>
              </div>
            </div>
            <p className="text-cream/70 leading-relaxed mb-6">
              L'unique restaurant gastronomique et rustique dédié entièrement à la pomme de terre, sublimée dans toutes ses formes.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-bold text-lg text-cream mb-4">Informations</h3>
            <ul className="space-y-3 text-cream/80">
              <li>12 Rue d'Antibes</li>
              <li>06400 Cannes, France</li>
              <li className="text-secondary font-bold mt-4">Ouvert du Mardi au Samedi</li>
              <li>19h00 - 23h30</li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-bold text-lg text-cream mb-4">Contact</h3>
            <ul className="space-y-3 text-cream/80 mb-6">
              <li>01 23 45 67 89</li>
              <li>contact@latelier-pommedeterre.fr</li>
            </ul>
            <div className="flex gap-4">
              <a href="#" className="bg-primary p-2 rounded-full hover:bg-secondary text-cream hover:text-accent transition-colors"><Share2 size={20} /></a>
              <a href="#" className="bg-primary p-2 rounded-full hover:bg-secondary text-cream hover:text-accent transition-colors"><Share2 size={20} /></a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center text-sm text-cream/50 gap-4">
          <p>© 2026 L'Atelier de la Pomme de Terre. Tous droits réservés.</p>
          <p>
            Designed by <a href="#" className="text-secondary font-bold hover:text-cream transition-colors">OneHostingEurope</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
