import React, { useState } from 'react';
import './Flashcard.css';

export default function Flashcard({ flashcard }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="front">{flashcard.question}</div>
      <div className="back">{flashcard.answer}</div>
    </div>
  );
}
