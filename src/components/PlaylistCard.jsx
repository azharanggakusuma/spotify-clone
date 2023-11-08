// PlaylistCard.js
import React from "react";

const PlaylistCard = ({ name, image, description }) => {
  return (
    <div className="bg-black rounded-lg overflow-hidden shadow-md group hover:shadow-lg">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-500 text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default PlaylistCard;
