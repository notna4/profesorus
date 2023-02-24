import React, { useEffect, useRef, useState } from 'react';
import Msg from '../components/Msg';
import Navbar from '../components/Navbar';
import ProfCard from '../components/ProfCard';
import Error from '../components/Error';
import './App.css';
import { ChangeEvent } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

import { Helmet } from "react-helmet";

import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, doc, updateDoc } from "firebase/firestore";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi4HH7m3KCig1GVrF6fhlAS8rJZ_D41l4",
  authDomain: "profesorulmeu-1dddf.firebaseapp.com",
  projectId: "profesorulmeu-1dddf",
  storageBucket: "profesorulmeu-1dddf.appspot.com",
  messagingSenderId: "695997319089",
  appId: "1:695997319089:web:4137c521194073feaf5f90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

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
      // e.target.scroll(0, 0);
      // e.target.scrollIntoView({ behavior: "smooth" });

      // var headerOffset = 500;
      // var elementPosition = e.target.getBoundingClientRect().top;
      // var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      // console.log(offsetPosition);
      // window.scrollTo({
      //   top: offsetPosition,
      //   behavior: "smooth"
      // });

      if (id === "nume" && newValue.length === 1) {
        window.scrollTo({
          behavior: "smooth"
        });
        document.body.scrollTop = document.documentElement.scrollTop = 90;
        // setter(numeDefault);
      }
      else if (id === "uni" && newValue.length === 1) {
        // window.scrollTo(0, 50);
        window.scrollTo({
          // top: 130,
          behavior: "smooth"
        });
        document.body.scrollTop = document.documentElement.scrollTop = 140;
      }
      else if (id === "mat" && newValue.length === 1) {
        // window.scrollTo(0, 100);
        window.scrollTo({
          // top: 170,
          behavior: "smooth"
        });
        document.body.scrollTop = document.documentElement.scrollTop = 180;
      }
      // else if (id === "nota" && newValue.length === 1) {
      //   // window.scrollTo(0, 250);
      //   window.scrollTo({
      //     // top: 300,
      //     behavior: "smooth"
      //   });
      //   document.body.scrollTop = document.documentElement.scrollTop = 280;
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
    // console.log("actual tags");
    // console.log(tags);
  }

  return (
    <div className="tag" onClick={e => { handleClick(e.target); }}>
      {tag}
    </div>
  )
}

type sendProps = {
  nume: string
  uni: string
  nota: any
  materie: string
  exper: string
  etichete: any
}

const sendToDB = async ({ nume, uni, nota, materie, exper, etichete }: sendProps) => {
  // Add a new document with a generated id.
  const docRef = await addDoc(collection(db, "pareri"), {
    name: nume || null,
    uni: uni || null,
    nota: nota || null,
    materie: materie || null,
    exper: exper || null,
    timestamp: serverTimestamp(),
    etichete: etichete
  });
  // console.log("Document written with ID: ", docRef.id);
}

const updateNumar = async (p: number) => {
  const numberRef = doc(db, "numar", "total");

  await updateDoc(numberRef, {
    nr: p
  });
}




function App() {


  const [pareri, setPareri] = useState<number>(0);

  const [loading, setLoading] = useState(true);

  const fetchPost = async () => {

    const docRef = doc(db, "numar", "total");
    const docSnap = await getDoc(docRef);
  }

  const [color, setColor] = useState<string>('rgb(108, 14, 14)');
  const [showError, setShowError] = useState<boolean>(false);
  const [errMessage, setErrMessage] = useState<string>("Eroare:(");
  const inscriere = "Înscrie-te acum ->";
  const semn = "->";


  useEffect(() => {
    // fetchPost();
    window.scrollTo({
      // top: 0,
      behavior: "smooth"
    });
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    getDoc(doc(db, "numar", "total")).then((doc: any) => {
      const initNumber = doc.data().nr;
      // console.log(initNumber);
      setPareri(initNumber);
    })
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
    // window.scrollTo(0, 0);
    // window.scrollTo(0, 200);
    if (event.value.length === 1) {
      window.scrollTo({
        // top: 250,
        behavior: "smooth"
      });
      document.body.scrollTop = document.documentElement.scrollTop = 250;

    }
    // var headerOffset = 500;
    // var elementPosition = event.getBoundingClientRect().top;
    // var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    // console.log(offsetPosition);
    // window.scrollTo({
    //   top: offsetPosition,
    //   behavior: "smooth"
    // });
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
  const notaDefault = 7.6;
  const matDefault = "Sisteme de operare (SO)";
  const experDefault = "Citește de pe slide-uri și nu prea este interesat de materie. E bine să mergeți la cursuri că mai va spune ce poate pica la examene. Cursurile și laboratoarele nu au nimic în comun.";
  const exper2 = "Asta e total o nouă părere care e diferită față de cealalată pe care o vezi. Nu știu exact ce să scriu aici dar este același profesor, aceeași materie, dar părerea e diferită pentru că am scris-o eu, alt student.:)"

  const [uni, setUni] = useState<string>(uniDefault);
  const [nume, setNume] = useState<string>(numeDefault);
  const [nota, setNota] = useState<number>(notaDefault);
  const [materie, setMat] = useState<string>(matDefault);
  const [exper, setExper] = useState<string>(experDefault);

  const sendReview = (setShowError: any) => {
    let eroare = -1;


    if (nume === numeDefault) {
      eroare = 0;
    }
    else if (uni === uniDefault) {
      eroare = 0;
    }
    else if (materie === matDefault) {
      eroare = 0;
    }
    else if (exper === experDefault) {
      eroare = 0;
    }
    else if (nota === notaDefault) {
      eroare = 0;
    }

    if (nota > 0 && nota <= 10) {
      // console.log("nota buna");
    }
    else {
      // console.log("nota rea");
      eroare = 1;
    }

    if (eroare === 0) {
      setShowError(true);
      setErrMessage("Completează toate căsuțele.");
      setColor("red");
      let timer = setTimeout(() => {
        setShowError(false);
      }, 2000);
    }
    else if (eroare === 1) {
      //nota  e wrong
      // console.log("nota wrong");
      setShowError(true);
      setColor("red");
      setErrMessage("Nota trebuie să fie între 1 și 10.");
      let timer = setTimeout(() => {
        setShowError(false);
      }, 2000);
    }
    else {
      // console.log(nume);
      // console.log(uni);
      // console.log(materie);
      // console.log(exper);
      // console.log(nota);
      // console.log(tags);

      let p: number = pareri;
      p++;
      // console.log(p);
      updateNumar(p);

      // console.log("succes");
      setShowError(true);
      setColor("green");
      let etichete = Array.from(tags);
      setErrMessage("Succes! Așteaptă..");
      sendToDB({ nume, uni, nota, materie, exper, etichete });
      let timer = setTimeout(() => {
        setShowError(false);
        window.location.reload();
      }, 3000);
    }
  }

  return (

    <div className="App">
      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>profesorus ― despre profesori, de la studenti</title>
        <meta name="title" content="profesorus ― despre profesori, de la studenti"></meta>
        <meta name="description" content="Site-ul unde poti vedea parerile altor studenti care au trecut deja prin anumite materii cu anumiti profesori."></meta>
        <link rel="canonical" href="http://profesorus.com" />

        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://profesorus.com/"></meta>
        <meta property="og:title" content="profesorus ― despre profesori, de la studenti"></meta>
        <meta property="og:description" content="Site-ul unde poti vedea parerile altor studenti care au trecut deja prin anumite materii cu anumiti profesori."></meta>
        <meta property="og:image" content="./profesorus.png"></meta>

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://profesorus.com/"></meta>
        <meta property="twitter:title" content="profesorus ― despre profesori, de la studenti"></meta>
        <meta property="twitter:description" content="Site-ul unde poti vedea parerile altor studenti care au trecut deja prin anumite materii cu anumiti profesori."></meta>
        <meta property="twitter:image" content="./profesorus.png"></meta>
      </Helmet> */}

      <span className="dot"></span>
      <span className="dot2"></span>
      <span className="dot2b"></span>
      <span className="dot3"></span>
      <span className="dot4"></span>
      <span className="dot5"></span>
      <Navbar />
      <Msg dest='/plan' message="Află când lansăm site-ul complet, aici ->" color="#111010" />
      {/* <Msg dest="/contact" message="Daca vrei sa ne ajuti cu ceva, scrie-ne ->" color="orange" /> */}

      <div className='main' id='main'>
        <div className='t1'>
          <h1 style={{ marginLeft: "20px" }}>Despre profesori,<br></br> de la studenți.</h1>
          <div className='t1b'>
            <h1 style={{ fontSize: "small", color: "gray" }}>Site-ul unde poți vedea părerile altor studenți care au trecut deja prin anumite materii cu anumiți profesori.</h1>
            <div className="pareriDiv">
              <div className='pareriUpper'>
                <div>
                  <h1 className='pareri-text'>Păreri strânse</h1>
                </div>
                <div>
                  <h1 className='pareri-text'>{pareri}/{500}</h1>
                </div>
              </div>
              <div id="prog" className="progress">
                <div id="prog-bar" className="progress-bar" style={{ width: `${(100 * pareri) / 500}%` }}>
                </div>
              </div>
            </div>
            <h1 style={{ fontSize: "small", color: "gray" }}>Dacă deja ai trecut de o materie, adaugă-ți părerea mai jos, în mod anonim, fără a avea nevoie de cont.</h1>
          </div>
        </div>

        <ProfCard name={nume} grade={nota} subject={materie} uni={uni} text={exper} style={write} setStyle={setWrite} />

        <div className='t2'>
          <InputSmall type="string" min={3} max={15} write={setWrite} setter={setNume} id="nume" placeh="Prenume profesor și inițială nume" />
          <InputSmall type="string" min={3} max={50} write={setWrite} setter={setUni} id="uni" placeh="Universitatea și acronimul" />
          <InputSmall type="string" min={3} max={50} write={setWrite} setter={setMat} id="mat" placeh="Materie" />
          {/* <InputSmall type="string" min={20} max={700} setter={setExper} id="experienta" placeh="Experienta cu profesorul" /> */}
          <div className="input-div">
            <div className="input">
              <textarea onInput={e => autoGrow(e.target)} placeholder='Părere despre cum a fost profesorul și materia' spellCheck="false" autoComplete='off' />
            </div>
          </div>
          <InputSmall type="string" min={1} max={5} write={setWrite} setter={setNota} id="nota" placeh="Notă pentru profesor (1-10)" />
        </div>
        Selectează etichete care i se potrivesc
        <div className='t3'>
          <Tags tag='Ține cont de prezență' tags={tags} />
          <Tags tag='Explică bine' tags={tags} />
          <Tags tag='Prezență obligatorie' tags={tags} />
          <Tags tag='Teme pentru puncte' tags={tags} />
          <Tags tag='Citește de pe slide-uri' tags={tags} />
          <Tags tag='Predă haotic' tags={tags} />
          <Tags tag='Nu înțelegi ce vorbește' tags={tags} />
        </div>
        <div className='sendBtn'>
          <button onClick={() => sendReview(setShowError)}>Trimite</button>
        </div>

        <div style={{ marginTop: "80px", }}>
          <h1 style={{ fontSize: "larger" }}>Descoperă ce pregătim <br /> pentru tine</h1>
        </div>

        <div className='two-cards'>
          <div className='card1'>
            <ProfCard style={alwaysOff} setStyle={alwaysOff} tags={tags} name={nume} grade={nota} subject={materie} uni={uni} text={exper} />
          </div>
          <div className='card2'>
            <ProfCard style={alwaysOff} setStyle={alwaysOff} tags={tags} name={nume} grade={nota} subject={materie} uni={uni} text={exper2} />
          </div>
          <div className='cards-text'>
            <h1>Mai multe pareri<br></br>pentru acelasi profesor.</h1>
          </div>
        </div>

        <div className="stat-cards">
          <div className='stats-main-text'>
            <h1 style={{ fontSize: "larger" }}>Universități și profesori.</h1>
            {/* <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center", borderRadius: '15px', paddingLeft: "7px", paddingRight: "7px", fontSize: "small", fontWeight: "600", backgroundColor: "gold" }}>In lucru</h1> */}
          </div>
          <div className="stats">
            <div className="stat" style={{ borderBottom: "none", boxShadow: "10px 10px 80px -31px rgba(0, 0, 0, 0.65)" }}>
              <h1 style={{ fontSize: "medium" }}>Universitatea Politehnica <br />București</h1>
              <h1 style={{ color: "#9ED744", fontSize: "medium", backgroundColor: "#324415", display: "flex", justifyContent: "center", alignItems: "center", width: "50px", borderRadius: "10px" }}>9.3</h1>
            </div>
            <div className='stat-prof'>
              <div style={{ display: "flex", gap: "10px", justifyContent: "flex-start", alignItems: "center" }}>
                <h1 style={{ fontSize: "medium" }}>Marian E.</h1>
                <h1 style={{ color: "#9ED744", fontSize: "small", backgroundColor: "#324415", display: "flex", justifyContent: "center", alignItems: "center", width: "50px", borderRadius: "5px" }}>9.6</h1>
                <h1 style={{ fontSize: "small", color: "gray" }}><u>31 de păreri {semn}</u></h1>
              </div>
              <h1 style={{ fontSize: "smaller" }}>Analiză Matematică (AM)</h1>
              <h1 style={{ fontSize: "smaller" }}>Algebră (AG)</h1>
              <h1 style={{ fontSize: "smaller" }}>Matematici Speciale (MS)</h1>
            </div>
            <div className='stat-prof'>
              <div style={{ display: "flex", gap: "10px", justifyContent: "flex-start", alignItems: "center" }}>
                <h1 style={{ fontSize: "medium" }}>Patricia M.</h1>
                <h1 style={{ color: "#9ED744", fontSize: "small", backgroundColor: "#324415", display: "flex", justifyContent: "center", alignItems: "center", width: "50px", borderRadius: "5px" }}>9.4</h1>
                <h1 style={{ fontSize: "small", color: "gray" }}><u>26 de păreri {semn}</u></h1>
              </div>
              <h1 style={{ fontSize: "smaller" }}>Programarea Calculatoarelor (PC)</h1>
              <h1 style={{ fontSize: "smaller" }}>Tehnici de Programare (TP)</h1>
            </div>
            <div className="stat">
              <h1 style={{ fontSize: "medium" }}>Universitatea Politehnica<br />Timișoara</h1>
              <h1 style={{ color: "#9ED744", fontSize: "medium", backgroundColor: "#324415", display: "flex", justifyContent: "center", alignItems: "center", width: "50px", borderRadius: "10px" }}>9.2</h1>
            </div>
            <div className="stat">
              <h1 style={{ fontSize: "medium" }}>Universitatea Babes Bolyai <br />Cluj Napoca</h1>
              <h1 style={{ color: "#9ED744", fontSize: "medium", backgroundColor: "#324415", display: "flex", justifyContent: "center", alignItems: "center", width: "50px", borderRadius: "10px" }}>9.2</h1>
            </div>
            <div className="stat">
              <h1 style={{ fontSize: "medium" }}>Și multe altele</h1>
              {/* <h1 style={{ color: "#9ED744", fontSize: "medium", backgroundColor: "#324415", display: "flex", justifyContent: "center", alignItems: "center", width: "50px", borderRadius: "10px" }}>9.2</h1> */}
            </div>
          </div>
        </div>
        <div className='end'>
          <h1 className='end-text'>Dacă vrei și tu să vezi păreri de la alți studenți despre profesorii care urmează să îți predea, <i>înscrie-te în lista de așteptare că să fii la curent cu ultimele noutăți despre noi și să afli când lansăm <Link to='/plan' style={{ color: "white" }}>site-ul complet.</Link></i></h1>
          <a href='https://forms.gle/wKv9m1qLhayYTLo78' target="_blank" rel="noopener noreferrer" className='inscriere' >{inscriere}</a>
        </div>
        {showError ? <Error text={errMessage} color={color} /> : null}
        <Footer />
      </div>
    </div >
  );
}

export default App;

