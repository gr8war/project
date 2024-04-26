import React, { useState } from 'react';
import './ContactPage.css'; // Make sure to create this CSS file

import Header from '../Navbar/navbar.jsx';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Sending data:', formData);
    // Here you would typically send the data to your server or an email

    setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
  };

  return (
    <div>
        <Header />
    <div className="contact-container">
      <div className="info-section">
        <div className="spor">
            <h1>Contact Me</h1>
          </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis rem quia, maxime minus placeat aliquam explicabo voluptas reiciendis harum nostrum omnis culpa hic qui consequatur quis cupiditate minima praesentium corrupti.</p>
      </div>
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name and surname"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" id='send_message'>Send Message</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default ContactPage;
