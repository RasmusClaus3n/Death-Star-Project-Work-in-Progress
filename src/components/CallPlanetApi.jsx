import { useState, useEffect } from 'react';

function CallApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const timeout = setTimeout(() => {
      controller.abort();
      setError(new Error('Request timed out.'));
      setLoading(false);
    }, 10000); // 10 seconds timeout

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, { signal });
        const result = await response.json();
        setData(result);
      } catch (error) {
        if (error.name === 'AbortError') {
          console.warn('Request was aborted');
        } else {
          setError(error);
        }
      } finally {
        clearTimeout(timeout);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
      clearTimeout(timeout);
    };
  }, [url]);

  return { data, loading, error };
}

export default CallApi;
