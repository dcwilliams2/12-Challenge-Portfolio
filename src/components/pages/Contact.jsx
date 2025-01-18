import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  // State variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }

    // Validate required fields
    if (!name || !message) {
      setErrorMessage('Please fill out all fields');
      return;
    }

    // Clear the form
    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
    alert(`Thank you for your submission, ${name}!`);
  };

  return (
    <div className="container text-center">
      <h1>Contact</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <h2>Name:</h2>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Your Name"
          className='form-control'
        />
        <h2>Email:</h2>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Your Email"
          className='form-control'
        />
        <h2>Message:</h2>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          placeholder="Your Message"
          rows="5"
          className='form-control'
        />
        <button type="submit" className='btn btn-primary w-100 mt-3'>Submit</button>
      </form>
      {/* Display error message if any */}
      {errorMessage && (
        <div>
          <p className="error-text" style={{ color: 'red' }}>{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
