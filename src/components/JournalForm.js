import React, { useState } from 'react';
import axios from 'axios';

const JournalForm = () => {
  const [entry, setEntry] = useState('');
  const [sentiment, setSentiment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/xxxxxx/v1/analyze', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${Buffer.from('apikey:your-api-key').toString('base64')}`
        },
        data: {
          text: entry,
          features: {
            sentiment: {}
          }
        }
      });
      setSentiment(response.data.sentiment.document.label);
    } catch (error) {
      console.error('Error in sentiment analysis:', error);
    }
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
    </div>
  );
};

export default JournalForm;