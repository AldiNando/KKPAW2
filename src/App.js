import React, { Component } from 'react';
import Navbar from './components/navbar'; 
import Sidebar from './components/sidebar';

class App extends Component {
  render() {
    return (
      <div className='pt-16'>
        {/* Top Navbar */}
        <Navbar title="Pemilihan Online" link="#" />

        {/* Sidebar */}
        <Sidebar />
      </div>
    );
  }
}

export default App;
