import { useState } from 'react';
import useCountries from './hooks/useCountries';
import SearchBar from './components/SearchBar';
import RegionFilter from './components/RegionFilter';
import CountryList from './components/CountryList';
import Loading from './components/Loading';
import ErrorView from './components/ErrorView';

function App() {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('all');

  const { countries, loading, error, retry } = useCountries(search, region);

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>🌍 Countries Explorer</h1>

      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '24px' }}>
        <SearchBar value={search} onChange={setSearch} />
        <RegionFilter value={region} onChange={setRegion} />
      </div>

      {loading && <Loading />}
      {error && <ErrorView message={error} onRetry={retry} />}
      {!loading && !error && (
        <CountryList countries={countries} />
      )}
    </div>
  );
}

export default App;