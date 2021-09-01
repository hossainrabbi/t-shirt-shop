import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function Review() {
  const item = 3.5;
  return (
    <div style={{ marginTop: 10 }}>
      {item >= 1 ? (
        <FaStar style={{ color: '#f77c29' }} />
      ) : (
        <FaStar style={{ color: '#cccccc' }} />
      )}
      {item >= 2 ? (
        <FaStar style={{ color: '#f77c29' }} />
      ) : (
        <FaStar style={{ color: '#cccccc' }} />
      )}
      {item >= 3 ? (
        <FaStar style={{ color: '#f77c29' }} />
      ) : (
        <FaStar style={{ color: '#cccccc' }} />
      )}
      {item >= 4 ? (
        <FaStar style={{ color: '#f77c29' }} />
      ) : (
        <FaStar style={{ color: '#cccccc' }} />
      )}
      {item >= 5 ? (
        <FaStar style={{ color: '#f77c29' }} />
      ) : (
        <FaStar style={{ color: '#cccccc' }} />
      )}
    </div>
  );
}
