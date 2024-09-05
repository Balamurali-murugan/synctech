import React from 'react';
import { useSelector } from 'react-redux';

const Loader = () => {
  const loading = useSelector((state) => state.uiReducer.loading);

  return (
    loading ? (
      <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50">
        <div className="w-12 h-12 border-4 border-gray-200 border-t-4 border-t-black rounded-full animate-spin"></div>
      </div>
    ) : null
  );
};

export default Loader;
