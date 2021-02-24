import { useEffect, useState } from 'react';

const useData = (url = null) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url).then(r => r.json().then(setData));
  }, [url]);

  return [data, setData];
};

export default useData;
