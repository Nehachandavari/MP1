import React, { useState } from 'react';

const PSignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsappNumber: '',
    lastPeriodDate: '',
    bestDescription: '',
    referralCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-blue-100">
      <div className="bg-blue-400 rounded-full p-2 mb-4">
        {/* Replace with actual logo */}
        <div className="text-white text-2xl">iMumz Logo</div>
      </div>
      <h2 className="text-3xl font-bold">Your first step towards a Happy Pregnancy.</h2>
      <div className="mt-4 bg-white p-4 rounded-lg shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="whatsappNumber"
              type="tel"
              placeholder="WhatsApp Number"
              value={formData.whatsappNumber}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="lastPeriodDate"
              type="date"
              placeholder="Last Period Date"
              value={formData.lastPeriodDate}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <select
              className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="bestDescription"
              value={formData.bestDescription}
              onChange={handleChange}
            >
              <option value="">What describes you the best?</option>
              {/* Add other options */}
            </select>
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="referralCode"
              type="text"
              placeholder="Referral Code"
              value={formData.referralCode}
              onChange={handleChange}
            />
          </div>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            GET STARTED
          </button>
        </form>
      </div>
    </div>
  );
};

export default  PSignupForm;
