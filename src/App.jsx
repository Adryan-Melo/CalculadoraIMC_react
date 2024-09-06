import { useState } from 'react'
import './App.css'


function App() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

const calcularImc =() => {
  const alturaNumerica = parseFloat(altura.replace(',', '.'));
  const pesoNumerico = parseFloat(peso.replace(',', '.'));

  const alturax2 = alturaNumerica*alturaNumerica;
  const result = pesoNumerico / alturax2; 

  return result.toFixed(2).replace('.', ',');
};

const obterCategoriaIMC = () => {
  const imc = parseFloat(calcularImc().replace(',', '.'));
  if (isNaN(imc)) {
    return 'Insira suas informações para saber sua classificação';

  } else if (imc <= 18.5) {
    return 'Abaixo do normal';

  } else if (imc >= 18.6 && imc <= 24.9) {
    return 'Normal';

  } else if (imc >= 25.0 && imc <= 29.9) {
    return 'Sobrepeso';

  } else if (imc >= 30.0 && imc <= 34.9) {
    return 'Obesidade grau I';

  } else if (imc >= 35.0 && imc <= 39.9) {
    return 'Obesidade grau II';

  } else if (imc >= 40.0){
    return 'Obesidade grau III';
  }

};

const imcCalculado = calcularImc();
const categoriaIMC = obterCategoriaIMC();


return(
<>
<h1>Calculadora de IMC</h1>

<p>Para calcular insira virgula nas medidas</p>

<form>
  <input type="number" placeholder='Digite sua altura' onChange={envento =>setAltura(envento.target.value)} />
  <input type="number" placeholder='Digite seu peso' onChange={envento =>setPeso(envento.target.value)} />
  <br />
</form>
<div>
<h2>Seu IMC é: {imcCalculado}</h2>
<h3>Classificação : {categoriaIMC}</h3>
</div>

</>
)
}

export default App
