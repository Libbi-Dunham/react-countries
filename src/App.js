import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import CountriesCard from './components/CountriesCard/CountriesCard';
import { getCountries } from './services/countries';
import Controls from './components/Controls/Controls';

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState([]);
  const [continent, setContinent] = useState('Choose');
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('a');
  useEffect(() => {
    const fetchData = async () => {
      const countriesData = await getCountries(sort);
      setCountries(countriesData);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    if (loading) {
      fetchData();
    }
  }, [loading, sort]);

  function filterCountries() {
    return countries.filter((country) => {
      return (
        (country.name.toLowerCase().includes(query) || country.name.includes(query)) &&
        (country.continent === continent || continent === 'Choose')
      );
    });
  }

  return (
    <section className="main">
      {loading && <span className="loader"></span>}
      {!loading && (
        <>
          <Header />
          <input
            placeholder="Search a Flag!"
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
          <Controls setSort={setSort} />
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
          <section className="country">
            {filterCountries().map((country) => (
              <CountriesCard key={country.name} {...country} />
            ))}
          </section>
        </>
      )}

      <Footer />
    </section>
  );
}

export default App;
