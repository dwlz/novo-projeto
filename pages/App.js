import {useState} from 'react';
import { FiSearch } from "../node_modules/react-icons/fi";
import api from './services/api.js';
import styles from '../styles/Home.module.css'



function App() {

  const [input, setInput] = useState('');
  const [cep, setCep] = useState({});

  async function handleSearch(){
    // 21235280/json/
    if(input === ''){
      alert("Preencha um CEP!!")
      return;
    }

    try{
      const responde = await api.get(`${input}/json`);
      setCep(responde.data);
      setInput("");

    }catch{
      alert("Erro ao buscar!");
      setInput("")

    }
  }


  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Buscador CEP</h1>

      <div className={styles.containerInput}>
        <input 
        type="text"
        placeholder="Digite seu cep..." 
        value={input}
        onChange={(e) => setInput(e.target.value) }
        />

        <button className={styles.buttonSearch} onClick={handleSearch}>
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>
      {Object.keys(cep).length > 0 && (
        <main className={styles.main}>
          <h2>CEP:{cep.cep}</h2>

          <span>Rua: {cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>

         </main>
      )}
    </div>
  )
}

export default App
