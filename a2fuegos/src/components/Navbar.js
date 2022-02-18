import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

//Funcion flecha, que crea un componente que retorna/da como resultado un div.
const Navbar = () => {
    return (
        <div>
            <nav className="colorNabvar navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <Link to="/">A2Fuegos</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="category/1">Productos</Link>
        </li>
        <li className="nav-item">
        <Link to="category/2">Utensillos</Link>
        </li>
        <li className="nav-item">
        <Link to="category/3">Ropa</Link>
        </li>
        <CartWidget />
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
}

//Con esta estructura exporta el"Navbar" o lo que fuera.
export default Navbar;