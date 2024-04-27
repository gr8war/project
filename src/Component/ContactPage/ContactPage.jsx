import React, { useState } from 'react';
import './ContactPage.css'; // Make sure to create this CSS file
import { TabTitle } from '../../Title.jsx';
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
  TabTitle('Əlaqə')

  return (
    <div>
        <Header />
    <div className="contact-container">
      <div className="info-section">
        <div className="spor">
            <h1>Bizimlə əlaqə</h1>
          </div>
        <p>Layihəmizlə bağlı hər hansı çətinliyi və ya təklifi rahatlıqla bu səhifə vasitəsiylə bizə çatdıra bilərsən. Lazımi məlumatları da daxil etməyi unutma ki ehtiyac olduqda geri əlaqə qura bilək :)</p>
      </div>
      <div className="form-section">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Ad Soyad"
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
            placeholder="Əlaqə Nömrəsi"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Mesajınızı qeyd edin"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" id='send_message'>Göndər</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default ContactPage;
