// src/Components/Admin/UserContext/UserContext.jsx

import React, { createContext } from 'react';

export const UserContext = createContext();

const generateSampleUsers = () => {
  const users = {};
  for (let i = 1; i <= 50; i++) {
    const userId = `user${i}`;
    users[userId] = {
      name: `User ${i}`,
      imageUrl: `https://i.pravatar.cc/150?img=${i % 70}`,
      chosenCourses: [
        {
          name: 'React Basics',
          watched: Math.floor(Math.random() * 10),
          total: 10,
        },
        {
          name: 'Node.js Fundamentals',
          watched: Math.floor(Math.random() * 15),
          total: 15,
        },
      ],
    };
  }
  return users;
};

export const UserContextProvider = ({ children }) => {
  const progress = generateSampleUsers();

  return (
    <UserContext.Provider value={{ progress }}>
      {children}
    </UserContext.Provider>
  );
};
