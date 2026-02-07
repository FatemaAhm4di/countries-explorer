import CountryCard from './CountryCard';

export default function CountryList({ countries }) {
  if (countries.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <p>No countries found.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '24px'
      }}
    >
      {countries.map((country) => (
        <CountryCard
          key={country.cca3} 
          country={country}
        />
      ))}
    </div>
  );
}