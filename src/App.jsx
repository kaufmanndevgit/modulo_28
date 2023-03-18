import React, { useState } from "react";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [imc, setIMC] = useState(null);
  const [classification, setClassification] = useState(null);

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const calculateIMC = () => {
    const imc = weight / (height * height);
    setIMC(imc);

    if (imc < 18.5) {
      setClassification("Magreza");
    } else if (imc >= 18.5 && imc < 25) {
      setClassification("Normal");
    } else if (imc >= 25 && imc < 30) {
      setClassification("Sobrepeso");
    } else {
      setClassification("Obesidade");
    }
  };

  return (
    <div style={{ backgroundColor: "CornflowerBlue" }}>
      <label style={{ fontFamily: "Arial, sans-serif" }}>
        Altura (em metros):
        <input style={{ marginLeft: "45px" }} type="number" value={height} onChange={handleHeightChange} />
      </label> <br /> <br />
      <label style={{ fontFamily: "Arial, sans-serif" }}>
        Peso (em quilogramas):
        <input style={{ marginLeft: "10px" }} type="number" value={weight} onChange={handleWeightChange} />
      </label> <br /> <br />
      <button style={{ backgroundColor: "Aqua", fontFamily: "Arial, sans-serif", marginLeft: "30px" }} onClick={calculateIMC}>Calcular IMC</button>

      {imc && (
        <div>
          <p>Seu IMC é {imc.toFixed(2)}</p>
          <p>Sua classificação é {classification}</p>
        </div>
      )}
    </div>
  );
}

export default App;
