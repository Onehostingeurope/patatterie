import React from 'react';

const Legal = ({ title }: { title: string }) => {
  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl min-h-[50vh]">
      <h1 className="font-serif text-4xl font-bold text-primary mb-8 border-b border-primary/20 pb-4">{title}</h1>
      <div className="prose prose-lg text-primary/80">
        <p>
          Le contenu de cette page "{title}" est en cours de rédaction par notre service juridique.
        </p>
        <p>
          La Patate Gourmande s'engage à respecter la réglementation en vigueur concernant vos données et votre sécurité.
        </p>
      </div>
    </div>
  );
};

export default Legal;
