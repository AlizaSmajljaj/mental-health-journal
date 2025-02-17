import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JournalForm from './components/JournalForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/journal" element={<JournalForm />} />
      </Routes>
    </Router>
  );
};

export default App;
