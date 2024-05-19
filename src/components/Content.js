import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Content = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const contentData = [
    {
      image: 'https://placekitten.com/200/200',
      description: 'Yoga for Expecting Moms: Asanas to Adopt & Avoid',
      link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
      category: 'Complications'
    },
    {
      image: 'https://placekitten.com/200/200',
      description: "Don't Ignore Itching in Pregnancy",
      link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
      category: 'Complications'
    },
    {
      image: 'https://placekitten.com/200/200',
      description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
      link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
      category: 'Garbh Sanskar'
    },
    {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Birth Stories'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Complications'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      ,
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      },
      {
        image: 'https://placekitten.com/200/200',
        description: 'Boosting Hemoglobin Levels for a Healthy Pregnancy',
        link: 'https://www.youtube.com/watch?v=3GTK6MLPJ9g',
        category: 'Weeks and Trimesters'
      }
    // Add more items as needed
  ];

  const filteredContent = contentData.filter(item =>
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <Navbar/>
    <div className="mt-20 container mx-auto px-6 py-12 ">
      <div className="mb-8 flex justify-between items-center">
        <div className="w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-md py-2 px-4"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full md:w-2/3 flex justify-end items-center space-x-4">
          <span className="text-gray-600 font-semibold">Filter by:</span>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-md"
            onClick={() => setSearchTerm('Birth Stories')}
          >
            Birth Stories
          </button>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-md"
            onClick={() => setSearchTerm('Garbh Sanskar')}
          >
            Garbh Sanskar
          </button>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-md"
            onClick={() => setSearchTerm('Nutrition')}
          >
            Nutrition
          </button>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-md"
            onClick={() => setSearchTerm('Weeks and Trimesters')}
          >
            Weeks and Trimesters
          </button>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-md"
            onClick={() => setSearchTerm('Complications')}
          >
            Complications
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-md overflow-hidden">
            <img src={item.image} alt={item.description} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{item.description}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.date}</p>
              <p className="text-sm text-gray-500">{item.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Content;
