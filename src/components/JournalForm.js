// src/components/JournalForm.js
import React, { useState, useEffect } from 'react';
import MoodChart from './MoodChart';

const JournalForm = () => {
  const [entry, setEntry] = useState('');
  const [sentiment, setSentiment] = useState('');
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem('entries')) || [];
    setEntries(savedEntries);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { entry, sentiment, date: new Date().toLocaleString() };
    const updatedEntries = [...entries, newEntry];
    localStorage.setItem('entries', JSON.stringify(updatedEntries));
    setEntries(updatedEntries);
    setEntry('');
    setSentiment('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Write your thoughts here..."
          rows="10"
          cols="30"
        />
        <button type="submit">Submit</button>
      </form>

      {sentiment && <p>Sentiment: {sentiment}</p>}

      <MoodChart entries={entries} />

      <h2>Your Previous Entries</h2>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>
            <p>{entry.entry}</p>
            <p>Sentiment: {entry.sentiment}</p>
            <p>Date: {entry.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JournalForm;