import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <div className="container">
        <h1>Olá, você!</h1>
        <p>Nessa página você vai conversar comigo, Fulano de Tal.</p> 
        <p>Para conversar comigo preencha seu e-mail abaixo e depois clique no link que você receberá.</p>
        <form>
          <input type="text" placeholder="Digite seu texto aqui" className="input" />
          <button type="submit" className="btn">Enviar</button>
        </form>
      </div>
      <hr/>
      <div>
        <header>
          <a href="/">Voltar</a>
          <span className="user">Nome do Usuário</span>
        </header>
        <div className="container">
          <div className="text-box">
            <div className="message-receiver">
              <p>
                <span>24/out/2019 21:00</span>
                Visitante: olá como vai você?</p>
            </div>
            <div className="message-sender">
              <p>Administrador: tudo bem e você?</p>
            </div>
            <div className="message-sender">
              <p>Administrador: em que posso ajuda-lo-ei?</p>
            </div>
          </div>
          <form>
            <input type="text" placeholder="Digite aqui sua mensagem"></input>
            <button type="button">Envie</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
