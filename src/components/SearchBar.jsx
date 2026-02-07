export default function SearchBar({ value, onChange }) {
  return (
    <div>
      <label htmlFor="search" style={{ display: 'block', marginBottom: '4px' }}>
        🔍 Search by country name
      </label>
      <input
        id="search"
        type="text"
        placeholder="e.g. Germany"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          padding: '8px',
          width: '200px',
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      />
    </div>
  );
}