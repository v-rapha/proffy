import React from 'react';

import whatsappIcon from './../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/57529750?s=460&u=ecdea07170683c8188c3fda98756f90dff1978e6&v=4"
          alt="v-rapha"
        />
        <div>
          <strong>Vinicius Raphael</strong>
          <span>Quimica</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de quimica avançada.
        <br />
        <br />
        Apaixonado por explodir coisas em laboratório e por mudar a vida de
        pessoas através de expreriências. Mais de 200.000 pessoas já passaram
        pos uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
