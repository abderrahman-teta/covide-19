
import './App.scss';
import Cases from './components/Cases'
import {useState,useEffect} from 'react';
import axios from 'axios';
function App() {
  const [country,setCountry] = useState('')
  
  useEffect(()=>{
    
    async function fetchData() {
      try {
        const response = await axios.get('https://covid-api.mmediagroup.fr/v1/cases');
        
        const countreis = Object.values(response.data)
        setCountry(countreis)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData()
    
    
  },[])
 
  
  
  
  return (
    <div className="App">
      <h1>Covid-19 Cases </h1>
      <div className="container">
        {country ? country.map(country =><Cases key={country.All.country} country={country.All.country} cases={country.All.confirmed} deaths={country.All.deaths} abbreviation={country.All.abbreviation} />):<p>loding ...</p> }
      </div>
    </div>
  );
}

export default App;
