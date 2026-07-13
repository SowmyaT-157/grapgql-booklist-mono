import React from 'react';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Book Directory</h1>
      <nav style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <Link to="/authors" style={{ fontSize: '18px', fontWeight: 'bold' }}>
          View All Authors
        </Link>
        <Link to="/titles" style={{ fontSize: '18px', fontWeight: 'bold' }}>
          View All Titles
        </Link>
      </nav>
    </div>
  );
};
