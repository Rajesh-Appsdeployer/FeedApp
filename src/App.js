import React from 'react';
import Navbar from './components/Navbar';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {  HashRouter, Route, Routes  } from 'react-router-dom';
import './App.css';
import Post from './components/Post';
import Feed from './pages/Feed';

function App() {
  return (
    
      <HashRouter>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Feed/>}/>
        <Route path="/post" element={<Post/>}/>
         </Routes>
      </HashRouter>
     
  );
}

export default App;
