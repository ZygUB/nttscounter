import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [totalViews] = useState(() => {
    const storedViews = localStorage.getItem('totalViews');
    return storedViews ? parseInt(storedViews) + 1 : 1;
  })

  useEffect(() => {
    localStorage.setItem('totalViews', totalViews);
  }, [totalViews]);
  
  return (
    <div className="App">
      <h1>Welcome to NTTS Fans Visitor Website</h1>
      <h2> You are {totalViews} viewer!</h2>
    </div>
  );
}
export default App
