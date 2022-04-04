import { useEffect, useState } from "react";
import './style.css'
import './App.css'
function Tresenratlla() {
  const [array, setArray] = useState([
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
    "_",
  ]);

  const [guanyador, setGuanyador] = useState(null); //guarda el ganador

  const [contador, setContador] = useState(0);

  const [acabar, setAcabar] = useState(false);
  //comprueva si acabar se ha modificado
  //se llama cada vez que comprueba si acabar es true
  useEffect(() => {
    if (acabar) {
      if (guanyador !== null) {
        //si alguien a ganado
        alert(`a guanyat ${guanyador}`);
      } else {
        alert("empateeeee");
      }
    }
  }, [acabar]);

  //cada vez que array modifica llama a funcion ganador
  useEffect(() => {
    setAcabar(!array.includes("_"));
    ganador();
  }, [array]);

  const click = (index) => {
    let copia = [...array];
    if (acabar) {
      //comprova si a guanyat es true
      return alert("el joc s'ha acabat, no segueixis provant");
    }
    if (contador % 2 === 0) {
      console.log("ha posat x");
      if (copia[index] === "_") {
        //si pulsas en un _ pone una X en un pulsar PAR (cada 2)
        copia[index] = "X";
      }
      setArray(copia); //guarda el array copiado modificado
    } else {
      console.log("ha posat 0");
      if (copia[index] === "_") {
        //si pulsas en un _ pone un 0 en un pulsar IMPAR.
        copia[index] = "0";
      }
      setArray(copia);
    }
    setContador(contador + 1); //por cada click pon +1 para comprovar si es par o impar
  };

  const clear = () => {
    setArray(["_", "_", "_", "_", "_", "_", "_", "_", "_"]);
  };

  const ganador = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (array[a] !== "_" && array[b] !== "_" && array[c] !== "_") {
        if (array[a] === array[b] && array[a] === array[c]) {
          setGuanyador(array[a]);
          setAcabar(true);
        }
      }
    }
  };

  return (
    <div className="App">
      <br />
      <h2>Tres en Ratlla</h2>
      <div className="caja">
        <br />

        {array.map(
          (
            titul, //valor
            index //posicio del array
          ) => (
            <button
              className="clicat btn btn-danger"
              onClick={() => click(index)}
            >
              {array[index]}
            </button>
          )
        )}
      </div>
      <button className="boton btn btn-danger " onClick={clear}>
        Reiniciar
      </button>
    </div>
  );
}

export default Tresenratlla;