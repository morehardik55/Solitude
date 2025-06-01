import { useState } from 'react';
import JournalEntryCard from '../components/JournalEntryCard';

function Journal() {
  const [journalEntries, setJournalEntries] = useState([
    {
      title: 'My First Entry',
      date: '2025-05-30',
      content: 'Today I started working on the Solitude project.'
    },
    {
      title: 'Learning React',
      date: '2025-05-31',
      content: 'React Router and components are fun to learn!'
    }
  ]);

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    content: ''
  });

  // Simple function to generate unique id
  const generateId = () => Date.now() + Math.random();

  // Store entries with id
  const [entriesWithId, setEntriesWithId] = useState(() => 
    journalEntries.map(entry => ({ ...entry, id: generateId() }))
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTitle = formData.title.trim();
    const trimmedContent = formData.content.trim();
    const trimmedDate = formData.date;

    if (trimmedTitle && trimmedContent && trimmedDate) {
      const newEntry = {
        id: generateId(),
        title: trimmedTitle,
        date: trimmedDate,
        content: trimmedContent
      };
      setEntriesWithId([...entriesWithId, newEntry]);
      setFormData({ title: '', date: '', content: '' });
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Journal</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <h2>Add New Journal Entry</h2>

        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
          style={{ display: 'block', marginBottom: '10px', padding: '5px', width: '300px' }}
        />

        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required
          style={{ display: 'block', marginBottom: '10px', padding: '5px', width: '200px' }}
        />

        <textarea
          placeholder="Content"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          required
          rows="4"
          style={{ display: 'block', marginBottom: '10px', padding: '5px', width: '400px' }}
        />

        <button type="submit" style={{ padding: '8px 16px' }}>Add Entry</button>
      </form>

      {entriesWithId.map((entry) => (
        <JournalEntryCard
          key={entry.id}
          title={entry.title}
          date={entry.date}
          content={entry.content}
        />
      ))}
    </div>
  );
}

export default Journal;
