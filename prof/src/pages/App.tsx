import React, { useEffect, useRef, useState } from 'react';
import Msg from '../components/Msg';
import Navbar from '../components/Navbar';
import ProfCard from '../components/ProfCard';
import './App.css';
import { ChangeEvent } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Link as Lnk, animateScroll as scroll } from "react-scroll";

type propsInput = {
  placeh: string
  sub?: string
  id: string
  setter: any
  min: number
  max: number
  type: string
  write: any
}

const InputSmall = ({ placeh, sub, id, setter, min, max, type, write }: propsInput) => {
  const regex = /^[a-zA-Z. ]+$/;
  // /^[a-zA-Z ]+[a-zA-Z.]+$/
  // /^[a-zA-Z ]+$/
  const uniDefault = "Academia de Studii Economice (ASE)";
  const numeDefault = "Marcel P.";
  const notaDefault = 9.1;
  const matDefault = "Sisteme de operare (SO)";

  // const [valid, setValid] = useState(false);

  // const validate = (value: any) => {
  //   if (!regex.test(value)) {
  //     setValid(false);
  //   } else {
  //     setValid(true);
  //   }
  //   // console.log(valid);
  //   return valid;
  // };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    // validate(newValue);

    if (newValue.length !== 0) {
      setter(newValue);
      write(true);
      // e.target.focus();
      e.target.scrollIntoView({ behavior: "smooth" });
      // if (id === "nume") {
      //   setter(numeDefault);
      // }
      // else if (id === "uni") {
      //   setter(uniDefault);
      // }
      // else if (id === "mat") {
      //   setter(matDefault);
      // }
      // else if (id === "nota") {
      //   setter(notaDefault);
      // }
    }
  }

  const autoGrow = (event: any) => {
    let len = event.value.length;
    // console.log(len);

    // console.log(len);

    if (len === 0) {
      // console.log(id);
      // write(false);
      if (id === "nume") {
        setter(numeDefault);
      }
      else if (id === "uni") {
        setter(uniDefault);
      }
      else if (id === "mat") {
        setter(matDefault);
      }
      else if (id === "nota") {
        setter(notaDefault);
      }
    }
  }

  return (
    <div className="input-div">
      <div className="input">
        <input onInput={e => autoGrow(e.target)} spellCheck="false" autoComplete='off' type={type} minLength={min} maxLength={max} id={id} placeholder={placeh} onChange={onChange} />
      </div>
      {/* <div className="sub">
        <h2>{sub}</h2>
      </div> */}
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
    // console.log(tags);
  }


  return (
    <div className="tag" onClick={e => handleClick(e.target)}>
      {tag}
    </div>
  )
}

function difference(first: any, sec: any) {
  return Math.abs(first - sec);
}




function App() {


  const inscriere = "Inscrie-te acum ->";
  const semn = "->";


  useEffect(() => {
    window.scrollTo(0, 0)

    // const onScroll: EventListener = (event: Event) => {
    //   const targetDiv: any = event.target as any; // <-- assert DOM-HTMLDocument
    //   // console.log("DOM event", targetDiv.activeElement.clientHeight);    // <-- activeElement works
    //   var diff = difference((targetDiv.activeElement.scrollTop + targetDiv.activeElement.clientHeight), (targetDiv.activeElement.scrollHeight));
    //   console.log("dif " + diff);
    //   if (diff < 5) {
    //     console.log("DAAAA");
    //   }
    // };

    // // const win: Window = window;   // <-- DOM-Window, extends DOM-EventTarget
    // const myref: MutableRefObject = useRef<MutableRefObject>(null);
    // myref.current.addEventListener("scroll", onScroll);

    // console.log(win);
    // return () => window.removeEventListener("scroll", onScroll);
  }, [])

  // function autoGrow(element: any) {
  //   element.style.height = "5px";
  //   element.style.height = (element.scrollHeight) + "px";
  // }
  const [write, setWrite] = useState<boolean>(false);
  const alwaysOff = false;

  const autoGrow = (event: any) => {
    event.style.height = "auto";
    event.style.height = (event.scrollHeight + 20) + "px";
    setExper(event.value);
    setWrite(true);
    // window.scroll(0, 0f);
    // event.focus();
    // event.scrollIntoView({ behavior: "smooth" });


    let len = event.value.length;
    // console.log(len);

    if (len === 0) {
      setExper(experDefault);
    }
  }

  let tags: any = new Set<string>();

  const uniDefault = "Academia de Studii Economice (ASE)";
  const numeDefault = "Marcel P.";
  const notaDefault = 9.1;
  const matDefault = "Sisteme de operare (SO)";
  const experDefault = "Citeste de pe slide-uri si nu prea este interesat de materie.Mai bine sa mergeti la cursuri ca mai va spune ce poate pica la examene.Cursurile si laboratoarele nu au nimic in comun.";



  const [uni, setUni] = useState<string>(uniDefault);
  const [nume, setNume] = useState<string>(numeDefault);
  const [nota, setNota] = useState<number>(notaDefault);
  const [materie, setMat] = useState<string>(matDefault);
  const [exper, setExper] = useState<string>(experDefault);

  return (

    <div className="App">

      <span className="dot"></span>
      <span className="dot2"></span>
      <span className="dot2b"></span>
      <span className="dot3"></span>
      <span className="dot4"></span>
      <span className="dot5"></span>
      <Navbar />
      <Msg dest='/plan' message="Afla cand lansam site-ul complet, aici ->" color="#111010" />
      {/* <Msg dest="/contact" message="Daca vrei sa ne ajuti cu ceva, scrie-ne ->" color="orange" /> */}

      <div className='main' id='main'>
        <div className='t1'>
          <h1 style={{ marginLeft: "20px" }}>Despre profesori,<br></br> de la studenti.</h1>
          <div className='t1b'>
            <h1 style={{ fontSize: "small", color: "gray" }}>Site-ul unde poti vedea parerile altor studenti care au trecut deja prin anumite materii cu anumiti profesori.</h1>
            <h1 style={{ fontSize: "small", color: "gray" }}>Daca deja ai trecut de o materie, adauga-ti parerea mai jos, in mod anonim, fara a avea nevoie de cont.</h1>
          </div>
        </div>

        <ProfCard tags={tags} name={nume} grade={nota} subject={materie} uni={uni} text={exper} style={write} />

        <div className='t2'>
          <InputSmall type="string" min={3} max={15} write={setWrite} setter={setNume} id="nume" placeh="Prenume profesor si initiala nume" />
          <InputSmall type="string" min={3} max={50} write={setWrite} setter={setUni} id="uni" placeh="Universitatea si acronimul" />
          <InputSmall type="string" min={3} max={50} write={setWrite} setter={setMat} id="mat" placeh="Materie" />
          {/* <InputSmall type="string" min={20} max={700} setter={setExper} id="experienta" placeh="Experienta cu profesorul" /> */}
          <div className="input-div">
            <div className="input">
              <textarea onInput={e => autoGrow(e.target)} placeholder='Parere despre cum a fost profesorul si materia' spellCheck="false" autoComplete='off' />
            </div>
          </div>
          <InputSmall type="tel" min={1} max={2} write={setWrite} setter={setNota} id="nota" placeh="Nota pentru profesor (1-10)" />
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

        <div style={{ marginTop: "80px", }}>
          <h1 style={{ fontSize: "larger" }}>Descopera ce pregatim <br /> pentru tine</h1>
        </div>

        <div className='two-cards'>
          <div className='card1'>
            <ProfCard style={alwaysOff} tags={tags} name={nume} grade={nota} subject={materie} uni={uni} text={exper} />
          </div>
          <div className='card2'>
            <ProfCard style={alwaysOff} tags={tags} name={nume} grade={nota} subject={materie} uni={uni} text={exper} />
          </div>
          <div className='cards-text'>
            <h1>Mai multe pareri<br></br>pentru acelasi profesor.</h1>
          </div>
        </div>

        <div className="stat-cards">
          <div className='stats-main-text'>
            <h1 style={{ fontSize: "larger" }}>Universitati si profesori.</h1>
            {/* <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center", borderRadius: '15px', paddingLeft: "7px", paddingRight: "7px", fontSize: "small", fontWeight: "600", backgroundColor: "gold" }}>In lucru</h1> */}
          </div>
          <div className="stats">
            <div className="stat" style={{ borderBottom: "none", boxShadow: "10px 10px 80px -31px rgba(0, 0, 0, 0.65)" }}>
              <h1 style={{ fontSize: "medium" }}>Universitatea Politehnica <br />Bucuresti</h1>
              <h1 style={{ color: "#9ED744", fontSize: "medium", backgroundColor: "#324415", display: "flex", justifyContent: "center", alignItems: "center", width: "50px", borderRadius: "10px" }}>9.3</h1>
            </div>
            <div className='stat-prof'>
              <div style={{ display: "flex", gap: "10px", justifyContent: "flex-start", alignItems: "center" }}>
                <h1 style={{ fontSize: "medium" }}>Marian E.</h1>
                <h1 style={{ color: "#9ED744", fontSize: "small", backgroundColor: "#324415", display: "flex", justifyContent: "center", alignItems: "center", width: "50px", borderRadius: "5px" }}>9.6</h1>
                <h1 style={{ fontSize: "small", color: "#8E8CDE" }}><u>31 de pareri {semn}</u></h1>
              </div>
              <h1 style={{ fontSize: "smaller" }}>Analiza Matematica (AM)</h1>
              <h1 style={{ fontSize: "smaller" }}>Algebra (AG)</h1>
              <h1 style={{ fontSize: "smaller" }}>Matematici Speciale (MS)</h1>
            </div>
            <div className='stat-prof'>
              <div style={{ display: "flex", gap: "10px", justifyContent: "flex-start", alignItems: "center" }}>
                <h1 style={{ fontSize: "medium" }}>Patricia M.</h1>
                <h1 style={{ color: "#9ED744", fontSize: "small", backgroundColor: "#324415", display: "flex", justifyContent: "center", alignItems: "center", width: "50px", borderRadius: "5px" }}>9.4</h1>
                <h1 style={{ fontSize: "small", color: "#8E8CDE" }}><u>26 de pareri {semn}</u></h1>
              </div>
              <h1 style={{ fontSize: "smaller" }}>Programarea Calculatoarelor (PC)</h1>
              <h1 style={{ fontSize: "smaller" }}>Tehnici de Programare (TP)</h1>
            </div>
            <div className="stat">
              <h1 style={{ fontSize: "medium" }}>Universitatea Politehnica<br />Timisoara</h1>
              <h1 style={{ color: "#9ED744", fontSize: "medium", backgroundColor: "#324415", display: "flex", justifyContent: "center", alignItems: "center", width: "50px", borderRadius: "10px" }}>9.2</h1>
            </div>
            <div className="stat">
              <h1 style={{ fontSize: "medium" }}>Universitatea Babes Bolyai <br />Cluj Napoca</h1>
              <h1 style={{ color: "#9ED744", fontSize: "medium", backgroundColor: "#324415", display: "flex", justifyContent: "center", alignItems: "center", width: "50px", borderRadius: "10px" }}>9.2</h1>
            </div>
          </div>
        </div>
        <div className='end'>
          <h1 className='end-text'>Daca vrei si tu sa vezi pareri despre profesorii care urmeaza sa iti predea, <i>inscrie-te in lista de asteptare ca sa fii la curent cu ultimele noutati despre noi si sa afli cand lansam <Link to='/plan' style={{ color: "white" }}>site-ul complet.</Link></i></h1>
          <Link className='inscriere' to={"www.google.com"}>{inscriere}</Link>
        </div>
        <Footer />
      </div>
    </div >
  );
}

export default App;

