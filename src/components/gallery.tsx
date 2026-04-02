'use client'
import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { id: 1, title: 'Service 1', description: 'Description for Service 1', image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Service 2', description: 'Description for Service 2', image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Service 3', description: 'Description for Service 3', image: 'https://via.placeholder.com/150' },
  { id: 4, title: 'Service 4', description: 'Description for Service 4', image: 'https://via.placeholder.com/150' },
  { id: 5, title: 'Service 5', description: 'Description for Service 5', image: 'https://via.placeholder.com/150' },
  { id: 6, title: 'Service 6', description: 'Description for Service 6', image: 'https://via.placeholder.com/150' },
];

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="p-4 border">
          <img src={service.image} alt={service.title} className="w-full h-40 object-cover mb-2" />
          <h3 className="text-xl font-semibold">{service.title}</h3>
          <p className="mt-2 text-gray-600">{service.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Gallery;
