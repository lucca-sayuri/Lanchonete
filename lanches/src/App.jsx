import { useState } from 'react'
import './App.css'
import imgCombo1 from './assets/combo-casal.jpg'
import imgCombo2 from './assets/combo-2.jpg'
import Card from './components/Card'

function App() {
  const [tipoCombo, setTipoCombo] = useState('casal')

  const dadosCombo = {
    casal: {
      imagem: imgCombo1, 
      titulo: 'Combo para duas pessoas',
      preco: 'R$ 65,00',
      descricao: 'Dois hambúrgueres, batata frita com cheddar e bacon, bolinho caipira e dois refrigerantes.'
    },
    familia: {
      imagem: imgCombo2, 
      titulo: 'Combo para 20 pessoas',
      preco: 'R$ 120,00',
      descricao: 'Um hambúrger grandão com carne bovina, cheddar, alface, cebola e maionese.'
    }
  }

  const alterarCombo = () => {
    setTipoCombo(tipoCombo === 'casal' ? 'familia' : 'casal')
  }

  const dados = dadosCombo[tipoCombo]

  return (
    <>
      <div className='container'>
        <h1>Escolha o seu combo</h1>
        <button onClick={alterarCombo}>Mudar Combo</button>

        <Card
          imagem = {dados.imagem}
          titulo = {dados.titulo}
          preco = {dados.preco}
          descricao = {dados.descricao}
        />
      </div>
    </>
  )
}

export default App
