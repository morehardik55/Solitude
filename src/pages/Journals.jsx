import JournalEntryCard from '../components/JournalEntryCard';

function Journal() {
  const journalEntries = [
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
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Journal</h1>
      {journalEntries.map((entry, index) => (
        <JournalEntryCard
          key={index}
          title={entry.title}
          date={entry.date}
          content={entry.content}
        />
      ))}
    </div>
  );
}
export default Journal;
