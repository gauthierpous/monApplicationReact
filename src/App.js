import logo from './logo.svg';
import './App.css';
import InstantHeartrate from "./component/InstantHeartrate";
import Graphic from "./component/Graphic"
import { useEffect, useState } from "react";


function randomHeartrate(){
  return Math.floor(Math.random()*160) + 40;
}

function App() {
  //Initialise les propriété
  //Retourne une propriétés et une fonction pour la modifier
  const [measurements, setMeasurement] = useState([]);

  // Fonction qui est appelé lors du chargement de la page
  // Défini un interval de 2 secondes
  // Modifie la valeur de la propriété toutes les 2 secondes
  // Conserve le tableau précédent, en crée un nouveau et ajoute la valeur
  useEffect(() => {
    setInterval(() => {
      setMeasurement((prev) => {
        const measurement = {
          timestamp: new Date().getTime(),
          heartrate: randomHeartrate(),
        }
        return [...prev, measurement]
      });
    }, 2000);
  }, [])

  //Affiche seulement la dernière valeur du tableau
  const measurement = measurements[measurements.length -1];
  console.log(measurements)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Modifier le fichier <code>src/App.js</code> et le rechargement sera automatique.
        </p>
        <InstantHeartrate data={measurement}/>
        <Graphic datalist={measurements}/>
      </header>
    </div>
  );
}

export default App;
