import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('/getItems');
      setResults(response.data);
      toast.success("Got All Items");
    } catch (error) {
      toast.error('Error fetching items!');
      console.error(error);
    }
  };

  const handleSearch = async () => {
    try {
      if (query.trim() === '') {
        fetchItems();
      } else {
        const response = await axios.get('/search', {
          params: { query },
        });
        setResults(response.data);
        toast.success('Search completed successfully!');
      }
    } catch (error) {
      toast.error('Error performing search!');
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Search Items</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        <h3>Here Are the List of Items Available:</h3>
        {results.map((item) => (
          <li key={item._id}>{item.name}: {item.description}</li>
        ))}
      </ul>
      <p>**Items can be added using route /api/items</p>
    </div>
  );
}

export default App;
