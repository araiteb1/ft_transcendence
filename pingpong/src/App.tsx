import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import {Container } from './components/Container'
function App() {

  return (
    <div className='App'>
      <Container styles={{border: '1px solid back' ,padding: '1rem'}} />
    </div>
  );
}

export default App;
