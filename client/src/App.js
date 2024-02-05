import React from 'react';

import { AboutUs, Services, FindUs, Footer, Gallery, Header } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Services />
    <FindUs />
    <Gallery />
    <Footer />
  </div>
);

export default App;
