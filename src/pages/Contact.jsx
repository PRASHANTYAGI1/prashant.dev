import React, { useState } from 'react';
import EarthScene from '../components/EarthScene';

const Contact = () => {
  // Step 1: State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Step 2: State for error messages
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Step 3: Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Step 4: Validation
  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let formIsValid = true;

    // Name validation
    if (!formData.name) {
      newErrors.name = 'Name is required!';
      formIsValid = false;
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required!';
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email!';
      formIsValid = false;
    }

    // Message validation
    if (!formData.message) {
      newErrors.message = 'Message is required!';
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  // Step 5: Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate form submission success
      alert('Form Submitted Successfully!');
      console.log(formData); // Here you can send data to your backend.
      setFormData({ name: '', email: '', message: '' }); // Reset form
    }
  };

  return (
    <div className="relative w-full h-screen -mt-20 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute top-0 left-0 z-0 w-full h-full">
        <EarthScene />
      </div>

      {/* Contact Form */}
      <div className="relative z-10 flex items-center justify-center mt-20 md:w-full md:h-auto">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md p-8 space-y-4 text-white shadow-lg bg-white/10 backdrop-blur-md rounded-2xl"
        >
          <h2 className="text-3xl font-bold text-center">Contact Me</h2>

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-3 rounded bg-white/20 focus:outline-none"
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-3 rounded bg-white/20 focus:outline-none"
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}

          {/* Message */}
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full p-3 rounded bg-white/20 focus:outline-none"
          ></textarea>
          {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 mt-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
