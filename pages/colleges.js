import { useState } from 'react';
import Navbar from '../components/Navbar';
import CollegeCard from '../components/CollegeCard';

const Colleges = () => {
  const [colleges, setColleges] = useState([]);
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const fetchColleges = async () => {
    const query = new URLSearchParams({ city, state }).toString();
    const response = await fetch(`/api/colleges?${query}`);
    const data = await response.json();
    setColleges(data);
  };

  return (
    <div>
      <Navbar />
      <h1>Filter Colleges</h1>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <button onClick={fetchColleges} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          Search
        </button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {colleges.map((college) => (
          <CollegeCard key={college.id} college={college} />
        ))}
      </div>
    </div>
  );
};

export default Colleges;
