import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import CountriesCard from './components/CountriesCard/CountriesCard';
import { getCountries } from './services/countries';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const countriesData = await getCountries();
      setCountries(countriesData);
    };
    fetchData();
  }, []);
  return (
    <section className="main">
      <Header />
      <Footer />
      <CountriesCard />
    </section>
  );
}

export default App;
