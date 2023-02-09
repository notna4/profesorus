import React, { useState } from 'react';
import InputSmall from '../components/InputSmall';
import Msg from '../components/Msg';
import Navbar from '../components/Navbar';
import Tags from '../components/Tags';
import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Msg message="Site-ul este in constructii, afla mai multe aici ->" color="#111010" />

      <div className='main'>
        <div className='t1'>
          <h1>De la studenti,<br></br> pentru studenti.</h1>
        </div>
        <div className='t2'>
          <InputSmall placeh="Universitatea si acronimul" sub="eg. Academia de Studii Economice din București (ASE)" />
          <InputSmall placeh="Prenume profesor si initiala numelui lui" sub="eg. Ion P. pentru Ion Popescu; Paul C. pentru Paul-Andrei Ciobanu " />
          <InputSmall placeh="Materie" sub="eg. Sisteme de operare (SO), adauga si acronim daca exista" />
          <InputSmall placeh="Experienta cu profesorul" sub="Min 20, max 200 de cuvinte" />
          <InputSmall placeh="Nota" sub="De la 1 la 10" />
        </div>
        Selecteaza etichete care se potrivesc
        <div className='t3'>
          <Tags tag='Tine cont de prezenta' />
          <Tags tag='Explica bine' />
          <Tags tag='Prezenta obligatorie' />
          <Tags tag='Fara teme' />
          <Tags tag='Nu tine cont de prezenta' />
          <Tags tag='Preda haotic' />
          <Tags tag='Nu intelegi ce vorbeste' />
        </div>
      </div>
    </div>
  );
}

export default App;
