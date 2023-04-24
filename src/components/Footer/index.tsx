import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <footer className='footer' style={{ backgroundImage: "url(/images/bg.png)" }}>
      <section className='socials'>
        <ul>
          <li>
            <a href='facebook.com' target='_blank'>
              <img src='/images/fb.png' alt='Logo Facebook'/>
            </a>
          </li>
          <li>
            <a href='facebook.com' target='_blank'>
              <img src='/images/tw.png' alt='Logo Twitter'/>
            </a>
          </li>
          <li>
            <a href='facebook.com' target='_blank'>
              <img src='/images/ig.png' alt='Logo Instagram' />
            </a>
          </li>
        </ul>
      </section>
      <section>
        <img src='/images/logo.png' alt='Logo Organo'></img>
      </section>
      <section>
        <p>Desenvolvido por Ícaro Lino.</p>
      </section>
    </footer>
  );  
}

export default Footer;