import React, { useState } from 'react';
import './../static/App.css';
import Ilustration from '../static/images/test_photo.jpg'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can implement your logic to handle form submission,
    // such as sending the data to a server or triggering an email.

    // For now, let's just log the form data.
    console.log(formData);
  };

  return (
    <section id="contact" className="min-h-screen bg-gray-700 flex p-20 justify-around">
      <div className='flex flex-col p-10 justify-around'>
        <div className='bg-mainelement text-center p-10 rounded-2xl'>
          <h1 className='text-3xl'>Contact me!</h1>
          <p>Cillum proident mollit aute commodo velit. Cupidatat reprehenderit minim veniam cupidatat ea eiusmod ullamco laboris velit aliqua. Aute ut nulla deserunt fugiat exercitation amet ipsum minim laborum.</p>
        </div>
        <div className='bg-gray-800 rounded-2xl p-5'>
          <form onSubmit={handleSubmit} className='flex flex-col justify-around px-14'>
            <div className='flex justify-around'>
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="p-2 m-2 rounded"/>
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="p-2 m-2 rounded" />
            </div>
            <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="p-2 m-2 rounded" />
            <button type="submit" className="bg-green-500 text-white p-2 rounded">Submit</button>
          </form>
        </div>
      </div>
      <div className='my-auto ml-20'>
        <img src={Ilustration} alt="Illustration" className='w-1/2 rounded-2xl'/>
      </div>
    </section>
  );
};

export default ContactSection;
