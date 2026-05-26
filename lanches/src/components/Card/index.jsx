import './Card.css'

export default function Card({ imagem, titulo, preco, descricao }) {
    return (
        <div className='card-container'>
            <div>
                <img src={imagem} alt="foto"/>
            </div>

            <div>
                <h3>{titulo}</h3>
                <p className='preco'>{preco}</p>
                <p className='descricao'>{descricao}</p>
            </div>
        </div>
    )
}