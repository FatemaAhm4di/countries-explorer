export default function ErrorView({ message, onRetry }) {
  return (
    <div style={{ textAlign: 'center', padding: '40px', color: '#d32f2f' }}>
      <p>Error: {message}</p>
      <button
        onClick={onRetry}
        style={{
          marginTop: '16px',
          padding: '8px 16px',
          backgroundColor: '#1976d2',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Retry
      </button>
    </div>
  );
}