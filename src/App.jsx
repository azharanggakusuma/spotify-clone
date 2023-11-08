// App.js
import React from "react";
import Header from "./components/Header";
import PlaylistGrid from "./components/PlaylistGrid";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-4">Featured Playlists</h1>
        <PlaylistGrid />
      </main>
      <Footer />
    </div>
  );
};

export default App;
