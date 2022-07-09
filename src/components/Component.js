import React from 'react';
import fetch from './useJsonFetch';

export default function Component({url}) {
  const [data, loading, error] = fetch(url);

  return (
    <div>
      {data && <div>{`Успешное получение данных: ${data.status}`}</div>}
      {loading && <progress/>}
      {error && <div>{JSON.stringify(error)}</div>}
    </div>
  )
};
