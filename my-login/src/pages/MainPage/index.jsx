import React, {useState, useEffect} from 'react';
import Nav from './components/Nav';
import Repo from './components/Repositories';
import Search from './components/Search';
import "./styles.css";
import { getRepositories } from '../../services/api'

const userId = '62a0b724ef09380b56077a27'

const MainPage = () => {
  const [repositories, setRepositories] = useState([])

  const loadData = async (query = '') => {
    const response = await getRepositories(userId);

    console.log(response.data)

    setRepositories(response.data)
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

  return (
    <div id="main">
      <Nav onLogout={handleLogout} />

     <Search onSearch={handleSearch} />

      <Repo onClearRepo={handleDeleteRepository} onNewRepo={handleNewRepo} repositories={repositories} /> 
      
   </div>
  
  )
}

export default MainPage;
