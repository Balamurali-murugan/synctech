import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataRequest } from '../redux/action'

const DataComponent = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchDataRequest());
  }, [dispatch]);

  return (
    <div className="p-6">
     <h1>DataComponent</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data?.length > 0 && (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataComponent;
