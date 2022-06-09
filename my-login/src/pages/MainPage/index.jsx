import React from 'react';
import Nav from './components/Nav';
import Repo from './components/Repositories';
import Search from './components/Search';
import "./styles.css";

const MainPage = () => {
  const handleLogout = () => {
    console.log('logout')
  }
  const handleSearch = (query) => {
    console.log('query', query )
  }
 
  const handleDeleteRepository = (repository) => {
    console.log('delete',repository)
  }
  const handleNewRepo = (url) => {
    console.log('new', url)
  }

  return (
    <div id="main">
      <Nav onLogout={handleLogout} />

     <Search onSearch={handleSearch} />

      <Repo onClearRepo={handleDeleteRepository} onNewRepo={handleNewRepo} repositories={[]} /> 
      
   </div>
  
  )
}

export default MainPage;
