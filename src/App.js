import { Stack, MantineProvider } from "@mantine/core";
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

function HomeScreen() {
  const [selectedTab, setSelectedTab] = useState('home');
  const [searchText, setSearchText] = useState('');
  // Filtered idols list would remain the same logic-wise
  const filteredIdols = []; // Simplified for example
  // Function to highlight text remains mostly the same but returns React elements

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Stack spacing={24}>
        {/* Router removed from here */}
        <div className="container">
          <header className="header">
            <h1>FAVPICK</h1>
            <button>MenuIcon</button> {/* Example placeholder for menu icon */}
          </header>

          {/* Simplified navigation and content rendering */}
          <nav>
            <Link to="/">Home</Link>
            <Link to="/artist">Artist</Link>
          </nav>

          <main>
            {selectedTab === 'home' && (
              <div>This is Home page</div>
            )}
            {/* Artist tab content would be similar */}
          </main>

          {/* Simplified footer navigation */}
          <footer>
            <button>Home</button>
            <button>Chat</button>
            <button>User</button>
            <button>Vote</button>
          </footer>
        </div>
      </Stack>
    </MantineProvider>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        {/* Define routes for other components here */}
      </Routes>
    </Router>
  );
}

export default App;
