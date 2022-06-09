import React, {useState, useEffect} from 'react';

import {Link} from 'react-router-dom'

import Nav from './components/Nav';
import Repo from './components/Repositories';
import Search from './components/Search';
import "./styles.css";
import { getRepositories } from '../../services/api'

const userId = '62a0ee7973eced073d144cd8'

const MainPage = () => {
  const [repositories, setRepositories] = useState([])
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  const loadData = async (query = '') => {
    try{
      setLoading(true)
      const response = await getRepositories(userId); 
      setRepositories(response.data)
      setLoading(false)
    } catch(err) {
      console.error(err);
      setLoadingError(true)
    }
    
  }

  useEffect(() => {
    // "shortcode"
    //assync function() {
    //}
    (async () => await loadData())();    
    
  }, []);

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
  if(loadingError) {
    return (
      <div className="loading">
      Erro ao carregar dados... <Link to='/login'> Voltar </Link>
    </div>
    )
  }
  if (loading) {
    return(
      <div className="loading">
        Tá carregando padrin... 
      </div>
    )
  }

  return (
    <div id="main">
      <Nav onLogout={handleLogout} />

     <Search onSearch={handleSearch} />

      <Repo onClearRepo={handleDeleteRepository} onNewRepo={handleNewRepo} repositories={repositories} /> 
      
   </div>
  
  )
}

export default MainPage;
