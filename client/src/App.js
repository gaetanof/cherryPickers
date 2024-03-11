import React from 'react';

import { AboutUs, Services, FindUs, Footer, Header } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>

    <Navbar />
    <AboutUs />
    {/* <Header /> */}
    <Services />
    <FindUs />
    <Footer />

  </div>
);

export default App;
