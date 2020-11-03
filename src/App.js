import React, { useState } from 'react';
import './App.scss';
import { Header, Nav, Results } from './components/index';
import requests from './requests';

function App() {

  const [option, setOption] = useState(requests.fetchTrending)

  return (
    <div className="app">

      <Header />
      <Nav setOption={setOption} />
      <Results option={option} />

    </div>
  );
}

export default App;
