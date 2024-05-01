import React from 'react';

import { AboutUs, Services, FindUs, Footer, Gallery } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <AboutUs />
    <Services />
    <FindUs />
    <Footer />
  </div>
);

export default App;
