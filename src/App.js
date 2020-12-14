// imports
import React from 'react';
import Header from './components/Header.jsx';
import Employee from './components/Employee';
import employees from './employees.json';

export default function App() {
  return(
    <div>
      <Header/>
      <Employee employees = { employees } />
    </div>
  );
}