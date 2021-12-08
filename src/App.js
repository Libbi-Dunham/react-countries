import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import CountriesCard from './components/CountriesCard/CountriesCard';
import { getCountries } from './services/countries';

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState([]);
  const [continent, setContinent] = useState('Choose');
  useEffect(() => {
    const fetchData = async () => {
      const countriesData = await getCountries();
      setCountries(countriesData);
    };
    fetchData();
  }, []);

  function filterCountries() {
    return countries.filter((country) => {
      return (
        country.name.includes(query) && (country.continent === continent || continent === 'Choose')
      );
    });
  }

  return (
    <section className="main">
      <Header />
      <input
        placeholder="Search a Flag!"
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <select value={continent} onChange={(e) => setContinent(e.target.value)}>
        <option value="Choose">Choose</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="Oceania">Oceania</option>
        <option value="South America">South America</option>
      </select>

      {filterCountries().map((country) => (
        <CountriesCard key={country.name} {...country} />
      ))}
      <Footer />
    </section>
  );
}

export default App;
