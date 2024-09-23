import React, { useState } from 'react';

const ContactUs = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !phone || !message) {
      alert('Please fill all fields.');
      return;
    }

    setSubmitted(true);
    alert('Form Submitted Successfully!');
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-lato text-center text-gray-700 mb-6">Contact Us</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-lato text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-lato text-gray-700">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-lato text-gray-700">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-100"
              rows="4"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full font-lato px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>

        {submitted && (
          <div className="mt-4 font-lato text-green-500 text-center">Thank you! Your message has been submitted.</div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
