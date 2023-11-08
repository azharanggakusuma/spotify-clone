// PlaylistGrid.js
import React from 'react';
import PlaylistCard from './PlaylistCard';

const playlists = [
  {
    id: 1,
    name: 'Playlist 1',
    image: '/playlist1.jpg',
    description: 'Description for Playlist 1'
  },
  {
    id: 2,
    name: 'Playlist 2',
    image: '/playlist2.jpg',
    description: 'Description for Playlist 2'
  },
  // Add more playlists here...
];

function PlaylistGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
      {playlists.map((playlist) => (
        <PlaylistCard key={playlist.id} {...playlist} />
      ))}
    </div>
  );
}

export default PlaylistGrid;
