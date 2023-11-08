// PlaylistCard.js
import React from 'react';

function PlaylistCard({ name, image, description }) {
  return (
    <div className="bg-primary text-white rounded-lg overflow-hidden shadow-lg group hover:shadow-xl">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-500 text-sm mt-2">{description}</p>
      </div>
    </div>
  );
}

export default PlaylistCard;
