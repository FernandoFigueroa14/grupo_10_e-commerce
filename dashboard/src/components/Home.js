import React from 'react';
import imagenFondo from '../assets/images/logo2.png';

function Home (){
  return(
    <div className="col-lg-12 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">Equipo 10 e-commerce | D-HC Clothes</h5>
        </div>
        <div className="card-body">
          <div className="text-center">
              <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
          </div>
          <p>DH-clothes es una tienda virtual donde podrás encontrar y comprar una gran variedad de playeras. Dichos productos serán dirigido a mujeres, hombres, niñas y niños con el deseo de vestir con ropa de calidad. Dentro de la pagina el usuario podrá crear una cuenta para guardar su información para mejorar su experiencia. Las paginas que conforman la tienda son:
            <hr/>
            <div>-Pagina de inicio (home)</div>
            <div>-Detalles del producto</div>
            <div>-Carrito de compras</div>
            <div>-Formulario de registro</div>
            <div>-Formulario de login.</div>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home