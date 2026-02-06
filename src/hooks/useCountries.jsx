import { useState, useEffect } from 'react';

const useCountries = (search = '', region = 'all') => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      let url = 'https://restcountries.com/v3.1/all';

      if (region !== 'all') {
        url = `https://restcountries.com/v3.1/region/${region}`;
      }
      else if (search.trim().length >= 2) {
        url = `https://restcountries.com/v3.1/name/${search.trim()}`;
      }

      const response = await fetch(url);

      if (!response.ok) {
        if (response.status === 404) {
          setCountries([]);
          setLoading(false);
          return;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setCountries(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch countries');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search, region]);

  const retry = () => {
    fetchData();
  };

  return { countries, loading, error, retry };
};

export default useCountries;