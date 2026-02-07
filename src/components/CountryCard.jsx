export default function CountryCard({ country }) {
  const name = country.name?.common || 'Unknown';
  const region = country.region || '—';
  const population = country.population
    ? new Intl.NumberFormat().format(country.population)
    : '—';
  const flag = country.flags?.svg || '';

  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      {flag && (
        <img
          src={flag}
          alt={`Flag of ${name}`}
          style={{
            width: '100%',
            height: '150px',
            objectFit: 'cover',
            borderBottom: '1px solid #eee'
          }}
        />
      )}
      <div style={{ padding: '16px' }}>
        <h3 style={{ margin: '0 0 8px', fontSize: '1.2rem' }}>{name}</h3>
        <p style={{ margin: '4px 0', fontSize: '0.9rem' }}>
          <strong>Region:</strong> {region}
        </p>
        <p style={{ margin: '4px 0', fontSize: '0.9rem' }}>
          <strong>Population:</strong> {population}
        </p>
      </div>
    </div>
  );
}