import './App.css';
import React, { useState, useEffect } from 'react';
import { fetch } from '@cloudflare/pages-functions';

function App() {
  const [totalViews, setTotalViews] = useState(0);

  useEffect(() => {
    fetch('/increment-view-count')
      .then((res) => res.json())
      .then((data) => setTotalViews(data.totalViews));
  }, []);

  return (
    <div className="App">
      <h1>Welcome to NTTS Fans Visitor Website</h1>
      <h2> You are {totalViews} viewer!</h2>
    </div>
  );
}
export default App;
