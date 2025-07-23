'use client';

import { useState } from "react";

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

  // Example: log the data or send to API
  console.log('Submitted:', formData);

  // Reset form (optional)
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
       <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        type="text"
        className="field"
       />
       <label className="input-label">Full Name</label>
      </div>
      <div className="input-group">
       <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
        className="field"
       />
       <label className="input-label">Email</label>
      </div>
      <div className="input-group">
       <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="field"
       ></textarea>
       <label className="message">Message</label>
      </div>
      <input type="submit" className="submit-btn" value="Submit" />
     </form>
    </div>
   </div>
  </section>
 );
}
