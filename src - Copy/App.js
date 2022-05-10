import React, {useEffect, useState } from 'react'
import './App.css';
import RecipeCardList from './components/RecipeCardList';
import RecipeCard from './components/RecipeCard';
import About from './pages/About';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  //const recipes = [1, 2, 3, 4, 5, 6];

  return (

  <Router>
    <div>
    <NavigationBar />
    <div className="content" class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      <Routes>
        <Route  exact path="/" element={<RecipeCardList />} />
        <Route  path="/recipe/:id" element={<RecipeCard />} />
        <Route  exact path="/about" element={<About />} />
        <Route  exact path="/contact" element={<Contact />} />
        <Route  exact path="*" element={<NoMatch />} />
      </Routes>
    </div>
    </div>
  </Router>

  );
}

export default App;
