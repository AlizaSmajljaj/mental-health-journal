import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Your Mental Health Journal</h1>
      <Link to="/journal">Go to Journal</Link>
    </div>
  );
};

export default HomePage;