// import '../assets/css/style.css'
import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className="footer-logo">
        <a href="/home">
            <img src="/images/logo.png" alt="logo"/>
        </a>
    </div>
    <nav className="footer-nav">
        <ul type='none'>
            <li>
                <a href="/home" className="footer-nav-a1">Home</a>
            </li>
            <li>
                <a href="#" className="footer-nav-a2">Sobre Nosotros</a>
            </li>
            <li>
                <a href="#" className="footer-nav-a3">Descuentos</a>
            </li>
        </ul>
        <ul type='none'>
            <li>
                <a href="/login" className="footer-nav-a4">Mi perfil</a>
            </li>
            <li>
                <a href="#" className="footer-nav-a5">Contactanos</a>
            </li>
            <li>
                <a href="#" className="footer-nav-a6">Política de privacidad</a>
            </li>
        </ul>
    </nav>
    <div className="social-media">
        <p>Recibe antes que nadie nuestras promociones</p>
        <form action="footer-email" method="POST">
            <input type="email" name="email" placeholder="Correo Electronico"/>
            <button type="submit">Suscribete!</button>
        </form>
        <div className="footer-icons">
          <i className="fab fa-facebook-square iconFb"></i>
          <i className="fab fa-instagram-square iconInsta"></i>
          <i className="fab fa-twitter iconTw"></i>
          <i className="fab fa-youtube iconYt"></i>
        </div>
    </div>
    <div className="copyright">
        <p>© 2021 DH-clothes. Todos los derechos reservados.</p>
    </div>
  </footer>
  )
}

export default Footer