import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Movies } from './pages/movies';
import { Route, Routes } from 'react-router-dom';
import { Movie } from './pages/movie';
import { Header } from './components/Header';
import { SavedList } from './pages/saved';

function App(props: any) {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Movies />} />
        <Route path='/savedMovies' element={<SavedList />} />
        <Route path='/movie/:id' element={<Movie {...props} />} />
      </Routes>
      
    </div>
  );
}

export default App;
