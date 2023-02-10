import React, { useState } from 'react';
import Msg from '../components/Msg';
import Navbar from '../components/Navbar';
import ProfCard from '../components/ProfCard';
import './App.css';
import { ChangeEvent } from 'react';
import Footer from '../components/Footer';

type propsInput = {
  placeh: string
  sub?: string
  id: string
  setter: any
}

const InputSmall = ({ placeh, sub, id, setter }: propsInput) => {

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setter(newValue);
  }
  return (
    <div className="input-div">
      <div className="input">
        <input type="text" id={id} placeholder={placeh} onChange={onChange} />
      </div>
      <div className="sub">
        <h2>{sub}</h2>
      </div>
    </div>
  )
}

type props = {
  tag: string
  tags: any
}

const Tags = ({ tag, tags }: props) => {

  const handleClick = (event: any) => {
    if (tags.has(tag)) {
      event.style.backgroundColor = "white";
      event.style.color = "black";
      event.style.border = "1px solid white"
      tags.delete(tag);
    }
    else {
      event.style.backgroundColor = "#161515";
      event.style.color = "gray";
      event.style.border = "1px solid #393535"
      tags.add(tag);
    }
    console.log(tags);
  }


  return (
    <div className="tag" onClick={e => handleClick(e.target)}>
      {tag}
    </div>
  )
}

function App() {
  let tags: any = new Set<string>();

  const [uni, setUni] = useState<string>("Academia de Studii Economice (ASE)");
  const [nume, setNume] = useState<string>("Marcel P.");
  const [nota, setNota] = useState<number>(9.1);
  const [materie, setMat] = useState<string>("Sisteme de operare (SO)");
  const [exper, setExper] = useState<string>("Citeste de pe slide-uri si nu prea este interesat de materie. Mai bine sa mergeti la cursuri ca mai va spune ce poate pica la examene. Cursurile si laboratoarele nu au nimic in comun.");

  return (
    <div className="App">
      <span className="dot"></span>
      <span className="dot2"></span>
      <Navbar />
      <Msg message="Site-ul este in lucru, afla mai multe aici ->" color="#111010" />

      <div className='main'>
        <div className='t1'>
          <h1>De la studenti,<br></br> pentru studenti.</h1>
        </div>

        <ProfCard tags={tags} name={nume} grade={nota} subject={materie} uni={uni} text={exper} />

        <div className='t2'>
          <InputSmall setter={setUni} id="uni" placeh="Universitatea si acronimul" />
          <InputSmall setter={setNume} id="nume" placeh="Prenume profesor si initiala nume" />
          <InputSmall setter={setMat} id="materie" placeh="Materie" />
          <InputSmall setter={setExper} id="experienta" placeh="Experienta cu profesorul" />
          <InputSmall setter={setNota} id="nota" placeh="Nota pentru profesor" />
        </div>
        Selecteaza etichete care i se potrivesc
        <div className='t3'>
          <Tags tag='Tine cont de prezenta' tags={tags} />
          <Tags tag='Explica bine' tags={tags} />
          <Tags tag='Prezenta obligatorie' tags={tags} />
          <Tags tag='Fara teme' tags={tags} />
          <Tags tag='Nu tine cont de prezenta' tags={tags} />
          <Tags tag='Preda haotic' tags={tags} />
          <Tags tag='Nu intelegi ce vorbeste' tags={tags} />
        </div>
        <div className='sendBtn'>
          <button>Trimite</button>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
