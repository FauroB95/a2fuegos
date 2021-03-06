import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import Search from './Search';

//Funcion flecha, que crea un componente que retorna/da como resultado un div.
const Navbar = () => {
    return (
        <div>
            <nav /*onClick={() => alert("Hola Navbar")}*/ className="colorNabvar navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <Link to="/" className="logoPrincipal">A2Fuegos</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="category/1" class="btn btn-primary">Productos</Link>
        </li>
        <li className="nav-item">
        <Link to="category/2" class="btn btn-primary">Utensillos</Link>
        </li>
        <li className="nav-item">
        <Link to="category/3" class="btn btn-primary">Ropa</Link>
        </li>
        <li className="inputBusqueda">
        <Search />
        </li>
        <li>
        <Link to="/cart"><CartWidget /></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
}

//Con esta estructura exporta el "Navbar" o lo que fuera.
export default Navbar;