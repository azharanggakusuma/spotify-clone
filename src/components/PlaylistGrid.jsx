// PlaylistGrid.js
import React from "react";
import PlaylistCard from "./PlaylistCard";

const playlists = [
  {
    id: 1,
    name: "Daily Mix 1",
    image: "url_to_playlist_image_1",
    description: "Your daily mix of fresh music.",
  },
  {
    id: 2,
    name: "Discover Weekly",
    image: "url_to_playlist_image_2",
    description: "Your weekly mixtape of fresh music.",
  },
  // Add more playlists here...
];

const PlaylistGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {playlists.map((playlist) => (
        <PlaylistCard key={playlist.id} {...playlist} />
      ))}
    </div>
  );
};

export default PlaylistGrid;
