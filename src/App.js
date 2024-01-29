import React from 'react';

import { AboutUs, FindUs, Footer, Gallery, Header } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <FindUs />
    <Gallery />
    <Footer />
  </div>
);

export default App;
