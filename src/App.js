import React, { useState } from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import MapView from './pages/map';


function App() {
  const [selectedType, setType] = useState('all')
  const handleListItemSelection = (e) => {
    return setType(e.target.attributes.name.nodeValue)
  }
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MapView selectedType={selectedType} setType={setType} handleListItemSelection={handleListItemSelection} />} />
        {/* <Route path='/list' element={<ListView selectedType={selectedType} setType={setType} handleListItemSelection={handleListItemSelection} />} /> */}
        <Route path='/insight' element={<Homepage selectedType={selectedType} setType={setType} handleListItemSelection={handleListItemSelection} />} />
      </Routes>
    </div>
  );
}

export default App;
