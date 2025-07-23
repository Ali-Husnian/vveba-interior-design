'use client';
import {useState} from 'react';

export default function ContactUs() {
 const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
 });

 const handleChange = (e) => {
  const {name, value} = e.target;
  setFormData((prev) => ({
   ...prev,
   [name]: value,
  }));
 };

 const handleSubmit = (e) => {
  e.preventDefault();

  console.log('Submitted:', formData);

  setFormData({name: '', email: '', message: ''});
 };

 return (
  <section className="contact">
   <div className="contact-wrapper">
    <div className="contact-left"></div>

    <div className="contact-right">
     <h1 className="contact-heading">Contact</h1>

     <form onSubmit={handleSubmit}>
      <div className="input-group">
       <label htmlFor="name" className="input-label">
        Full Name
       </label>
       <input
        type="text"
        id="name"
        name="name"
        className="field"
        placeholder="Enter your full name"
        value={formData.name}
        onChange={handleChange}
        required
       />
      </div>

      <div className="input-group">
       <label htmlFor="email" className="input-label">
        Email
       </label>
       <input
        type="email"
        id="email"
        name="email"
        className="field"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        required
       />
      </div>

      <div className="input-group">
       <label htmlFor="message" className="input-label">
        Message
       </label>
       <textarea
        id="message"
        name="message"
        className="field"
        placeholder="Write your message"
        rows="4"
        value={formData.message}
        onChange={handleChange}
        required
       />
      </div>

      <input type="submit" className="submit-btn" value="Submit" />
     </form>
    </div>
   </div>
  </section>
 );
}
