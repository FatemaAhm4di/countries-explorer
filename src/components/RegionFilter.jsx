export default function RegionFilter({ value, onChange }) {
  const regions = [
    { id: 'all', name: 'All Regions' },
    { id: 'Africa', name: 'Africa' },
    { id: 'Americas', name: 'Americas' },
    { id: 'Asia', name: 'Asia' },
    { id: 'Europe', name: 'Europe' },
    { id: 'Oceania', name: 'Oceania' }
  ];

  return (
    <div>
      <label htmlFor="region" style={{ display: 'block', marginBottom: '4px' }}>
        🌍 Filter by region
      </label>
      <select
        id="region"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: '8px',
          minWidth: '150px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      >
        {regions.map((region) => (
          <option key={region.id} value={region.id}>
            {region.name}
          </option>
        ))}
      </select>
    </div>
  );
}