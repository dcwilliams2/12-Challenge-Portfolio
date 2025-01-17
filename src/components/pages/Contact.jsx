import { useState } from 'react';
import './style.css';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

   //*** this need to be chaged to reflect the form for the contact page */
    // Based on the input type, we set the state of either email, username, and password
    // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

    if (inputType === 'email') {
        setEmail(inputValue);
      } else if (inputType === 'userName') {
        setUserName(inputValue);
      } else {
        setPassword(inputValue);
      }
    };

    // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
    // I dont think the ";" betweem email and message is correct
    return info === 'Name' ? setName(value) : setEmail(value) ; setMessage(value);
  

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (!validateEmail(email)) {
        setErrorMessage('Email is invalid');
        return;
    }

    // Alert the user their first and last name, clear the inputs
    setName('');
    setEmail('');
    setMessage('');
    alert(`Thank you for your submission ${Name}!`);
  };

  return (
    <div className="container text-center">
      <h1>
        Contact {firstName} {lastName}
      </h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <h2>Name:</h2>
        <input
          value={Name}
          name="Name"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
        />
        <h2>Email:</h2>
        <input
          value={Email}
          name="Email"
          onChange={handleInputChange}
          type="text"
          placeholder="Email"
        />
        <h2>Message:</h2>
         <input
          value={Message}
          name="Message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
        />
        <button type="submit">
          Submit
        </button>
      </form>
      {errorMessage && (
        <div><p className='error-text'>{errorMessage}</p></div>
      )}
    </div>
  );
}
