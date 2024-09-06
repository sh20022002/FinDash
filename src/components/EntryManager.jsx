import React, { useState } from 'react';
import styles from '../css/EntryManager.module.css'; // Import CSS module for styling
import deleteIcon from '../assets/Trash.svg'; // Import the delete icon

const EntryManager = () => {
  const [inputValue, setInputValue] = useState('');
  const [entries, setEntries] = useState([]);

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle adding an entry (Expenses or Revenue)
  const addEntry = (type) => {
    const value = parseFloat(inputValue);
    if (isNaN(value) || value === 0) {
      alert('Please enter a valid number');
      return;
    }

    // Add the new entry to the state
    setEntries((prevEntries) => [
      ...prevEntries,
      { id: Date.now(), type, value }
    ]);

    // Clear the input field after submission
    setInputValue('');

  };
  const deleteEntry = (id) => {
    setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
  };



  return (
    <div className={styles.entryManager}>
      <h2 className={styles["text-color"]}>Expenses & Revenue Tracker</h2>

      {/* Input field for numeric value */}
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a value"
        className={styles.inputField}
      />

      {/* Buttons for Expenses and Revenue */}
      <div className={styles.buttonGroup}>
        <button
          className={styles.expensesButton}
          onClick={() => addEntry('Expenses')}
        >
          Add Expenses
        </button>
        <button
          className={styles.revenueButton}
          onClick={() => addEntry('Revenue')}
        >
          Add Revenue
        </button>
      </div>

      {/* Render the list of entries */}
      <div className={styles.entriesContainer}>
        {entries.map((entry, index) => (
          <div
            key={entry.id}
            className={`${styles.entryItem} ${
              entry.type === 'Expenses' ? styles.expenses : styles.revenue
            }`}
          >
            <span>{entry.type}: ${entry.value.toFixed(2)}</span>
            <button
              className={styles.deleteButton}
              onClick={() => deleteEntry(entry.id)}>
              <img src={deleteIcon} alt="Delete" className={styles.icon} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EntryManager;
