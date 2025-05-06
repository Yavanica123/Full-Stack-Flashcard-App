import React, { useState } from 'react';
import Flashcard from './Flashcard';
import './App.css';

function App() {
  const [cards, setCards] = useState([
    { id: 1, question: "What is Node.js?", answer: "Node.js is a JavaScript runtime built on Chrome's V8 engine, used for server-side scripting." },
    { id: 2, question: "What is Express.js?", answer: "Express.js is a minimal web application framework for Node.js used to build APIs." },
    { id: 3, question: "What is MongoDB?", answer: "MongoDB is a NoSQL database that stores data in flexible JSON-like documents." },
    { id: 4, question: "What is REST?", answer: "REST (Representational State Transfer) is an architectural style for designing networked applications." },
    { id: 5, question: "What is a full-stack developer?", answer: "A full-stack developer is someone who works on both the frontend and backend of an application." },
    { id: 6, question: "What is the virtual DOM?", answer: "The virtual DOM is an in-memory representation of the real DOM, used to optimize updates and rendering in React." },
    { id: 7, question: "What is the difference between a POST and a GET request?", answer: "A GET request retrieves data from the server, while a POST request sends data to the server." },
    { id: 8, question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript, which looks similar to HTML and is used in React to describe what the UI should look like." },
    { id: 9, question: "What is middleware in Express?", answer: "Middleware functions in Express are used to handle requests, modify responses, or end the request-response cycle." },
    { id: 10, question: "What is a RESTful API?", answer: "A RESTful API is an API that follows the principles of REST, typically using HTTP methods like GET, POST, PUT, DELETE to interact with resources." }
  ]);

  // Function to handle adding new flashcards
  const handleAddCard = (e) => {
    e.preventDefault();
    const question = e.target.question.value;
    const answer = e.target.answer.value;
    
    if (!question || !answer) return;

    setCards([...cards, { id: Date.now(), question, answer }]);
    e.target.reset();
  };

  return (
    <div className="App">
      <h1>Full-Stack Development Flashcards</h1>
      <h2 className="subtitle">Boost your full-stack skills—one flashcard at a time!</h2>
      <img
  src="https://binarapps.com/wp-content/uploads/2020/12/3.What-is-Full-Stack-Web-Development-.png"
  alt="Banner"
  className="carousel-image"
/>
      
      {/* Flashcards display */}
      <div className="card-grid">
        {cards.map(card => (
          <Flashcard key={card.id} flashcard={card} />
        ))}
      </div>

      {/* Form to add new flashcards */}
      <form onSubmit={handleAddCard}>
        <input name="question" placeholder="Enter question" required />
        <input name="answer" placeholder="Enter answer" required />
        <button type="submit">Add Card</button>
      </form>
    </div>
  );
}

export default App;
