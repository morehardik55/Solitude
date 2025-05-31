function JournalEntryCard({ title, date, content }) {
  return (
    <div className="journal-card" style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '15px',
      marginBottom: '10px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2>{title}</h2>
      <p><i>{date}</i></p>
      <p>{content}</p>
    </div>
  );
}
export default JournalEntryCard;
